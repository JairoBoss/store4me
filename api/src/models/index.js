const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.app = require("./trabajador.model.js")(mongoose);
db.app = require("./categoria.model.js")(mongoose);
db.app = require("./producto.model.js")(mongoose);
db.app = require("./cliente.model.js")(mongoose);
db.app = require("./proveedor.model.js")(mongoose);
db.app = require("./venta.model.js")(mongoose);

module.exports = db;
