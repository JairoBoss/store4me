/**
 *  Mongoose es un ODM (Object Document Mapping) herramienta para node y mongo
 * 
 */
const mongoose = require("mongoose");
var CategoriasSchema = mongoose.Schema({
    Nombre: {
        type: String,
        required: true
    },
    Descripcion: {
        type: String
    }
});

module.exports = mongoose.model("Categoria", CategoriasSchema);