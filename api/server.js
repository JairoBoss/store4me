const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require('fs');
const db = require("./src/models");
const path = require('path');
require("dotenv").config();
const { deleteImagen, generateUploadURL, getImagen } = require("./s3.js");
const { promisify } = require("util");
const crypto = require("crypto");
const aws = require('aws-sdk');
const randomBytes = promisify(crypto.randomBytes);

const region = process.env.AWS_REGION;
const bucketName = process.env.AWS_BUCKET_NAME;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccesKey = process.env.AWS_SECRET_KEY;

const s3 = new aws.S3({
  //apiVersion: '2006-03-01',
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccesKey,
  region: region,
  signatureVersion: "v4",
});

//require('./models/associations.models');

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var corsOptions = {
  origin: "http://localhost:8080",
};
//agregue cors middlewares usando el método app.use ()
//app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );

  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");

  next();
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// realizar parse de content-type - application/json de requests
app.use(bodyParser.json());
// realizar parse de content-type - application/x-www-form-urlencoded de requests
app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Conectado a la base de datos!");
  })
  .catch((err) => {
    console.log(
      `Ocurrio un error al tratar de conectarlo a la base de datos! ${err}`
    );
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "api arriba" });
});

app.post("/api/s3Url", upload.single("foto"), async (req, res) => {
  const stream = fs.createReadStream(req.file.path);

  const ext = path.extname(req.file.originalname).toLowerCase();

  let fileType = "";

  if (ext == ".png") {
    fileType = "image/png";
  } else if (ext == ".jpg" || ext == ".jpeg") {
    fileType = "image/jpg";
  } else {
    res.send({ data: "error" });
  }

  stream.on("error", function (err) {
    console.log("error in read stream: ", err);
    throw err;
  });

  const rawBytes = await randomBytes(16);
  const imageName = rawBytes.toString("hex");

  let params = {
    Bucket: bucketName,
    Body: stream,
    Key: imageName,
    ContentType: fileType,
  };
  const data = await s3.upload(params).promise();

  res.send({ data: data.Key });
});

app.get("/api/s3Url2/:key", async (req, res) => {
  const key = req.params.key;
  const imagen = await getImagen(key);
  res.send(imagen);
});

require("./src/routes/trabajador.routes.js")(app);
require("./src/routes/categoria.routes.js")(app);
require("./src/routes/producto.routes.js")(app);
require("./src/routes/proveedor.routes.js")(app);
require("./src/routes/cliente.routes.js")(app);
require("./src/routes/venta.routes.js")(app);

let PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server en el puerto ${PORT}`);
});
