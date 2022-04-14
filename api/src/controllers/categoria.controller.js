const Categoria = require("../models/categoria.model.js");
const Producto = require("../models/producto.model.js");

exports.create = (req, res) => {
  if (!req.body.Nombre) {
    res.status(400).send({
      message: "La categoria debe de tener un nombre",
    });
    return;
  }

  const categoriaNueva = new Categoria({
    Nombre: req.body.Nombre,
    Descripcion: req.body.Descripcion,
  });
  categoriaNueva
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear la categoria ${categoriaNueva.Nombre}`,
      });
    });
};

exports.findAll = (req, res) => {
  Categoria.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un erro al tratar de recuperar las categoria registradas.",
      });
    });
};

exports.findOne = (req, res) => {
  Categoria.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Categoria con id: ${req.params.id} no encontrada`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Categoria con id: ${req.params.id} no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos la categoria con id: ${req.params.id}.`,
      });
    });
};

exports.update = (req, res) => {
  Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Categoria con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Categoria con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar la Categoria con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Categoria.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Categoria con id: ${req.params.id}, no encontrada`,
        });
      }
      Producto.updateMany(
        { Categorias: req.params.id },
        {
          $pull: {
            Categorias: req.params.id,
          },
        }
      ).then((data) => {
        if (!data) {
          return res.status(404).send({
            message: `Producto con id: ${req.params.id}, no encontrada`,
          });
        }
        console.log(data)
      });
      res.send({ message: "Categoria eliminada con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Categoria con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar la Categoria con id: ${req.params.id}.`,
      });
    });
};
