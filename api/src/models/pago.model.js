const mongoose = require("mongoose");

const PaypalSchema = mongoose.Schema({
  Nombres: {
    type: String,
  },
  NombreProducto: {
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
