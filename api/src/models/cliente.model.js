const mongoose = require("mongoose");

const ClienteSchema = mongoose.Schema({
  Nombres: {
    type: String,
  },
  Apellido_Paterno: {
    type: String,
  },
  Apellido_Materno: {
    type: String,
  },
  Email: {
    type: String,
  },
  Telefono: {
    type: Number,
  },
  
});

module.exports = mongoose.model("Cliente", ClienteSchema);
