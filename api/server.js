const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require("./src/models");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

var corsOptions = {
    origin: "http://localhost:8080"
};
//agregue cors middlewares usando el método app.use ()
//app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');

    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

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
        console.log(`Ocurrio un error al tratar de conectarlo a la base de datos! ${err}`);
        process.exit();
    });

app.get('/', (req, res) => {
    res.json({ "message": "api arriba" });
});


require('./src/routes/trabajador.routes.js')(app);
require('./src/routes/categoria.routes.js')(app);
require('./src/routes/producto.routes.js')(app);
require('./src/routes/proveedor.routes.js')(app);
require('./src/routes/cliente.routes.js')(app);
require('./src/routes/venta.routes.js')(app);

let PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server en el puerto ${PORT}`);
});
