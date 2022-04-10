const mongoose = require("mongoose");

const ProveedorSchema = mongoose.Schema({
  Nombres: {
    type: String
  },
  Apellido_Paterno: {
    type: String
  },
  Apellido_Materno: {
    type: String
  },
  Domicilio: {
    type: String
  },
  Email: {
    type: String
  },
  Telefono: {
    type: Number
  },      
  Citas: [
    {
      type: mongoose.Schema.Types.Date,
    },
  ],

});

module.exports = mongoose.model("Proveedor", ProveedorSchema);