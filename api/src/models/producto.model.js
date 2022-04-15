const mongoose = require("mongoose");
const ProductosSchema = mongoose.Schema({
  Nombre: {
    type: String,
  },
  Precio: {
    type: Number,
  },
  Stock: {
    type: Number,
  },
  Descripcion: {
    type: String,
  },
  Categorias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Categorias",
    },
  ],
  Imagenes: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model("Producto", ProductosSchema);
