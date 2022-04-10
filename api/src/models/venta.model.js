const mongoose = require("mongoose");
const VentasSchema = mongoose.Schema({
  Productos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Producto",
    },
  ],
  Trabajador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trabajador",
  },
  Cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
  },
  Total: {
    type: Number,
  },
});

module.exports = mongoose.model("Ventas", VentasSchema);
