const mongoose = require("mongoose");

const PaypalSchema = mongoose.Schema({
  Nombres: {
    type: String,
  },
  Apellidos: {
    type: String,
  },
  Email: {
    type: String,
  },
  Telefono: {
    type: String,
  },
  Calle: {
    type: String,
  },
  Colonia: {
    type: String,
  },
  Pais: {
    type: String,
  },
  Ciudad: {
    type: String,
  },
  Estado: {
    type: String,
  },
  CodigoPostal: {
    type: String,
  },
  Productos: [[{    
    type: String,
    type: String,    
  }]],
  Indicacion: {
    type: String,
  },
  cantidad: {
    type: String,
  },
  IdPaypal: {
    type: String,
  },
  Pagado: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Paypal", PaypalSchema);
