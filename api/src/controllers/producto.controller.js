const Producto = require("../models/producto.model.js");

exports.create = (req, res) => {
  if (!req.body.Nombre) {
    res.status(400).send({
      message: "El producto debe de tener un nombre",
    });
    return;
  }

  const productoNuevo = new Producto({
    Nombre: req.body.Nombre,
    Precio: req.body.Precio,
    Stock: req.body.Stock,
    Descripcion: req.body.Descripcion,
    Categorias: req.body.Categorias,
    Imagenes: req.body.Imagenes,
  });

  productoNuevo
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear el  Producto ${productoNuevo.Nombre}`,
      });
    });
};

exports.findAll = (req, res) => {
  Producto.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un erro al tratar de recuperar los Productos registrados.",
      });
    });
};

exports.findOne = (req, res) => {
  Producto.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Producto con id: ${req.params.id} no encontrada`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Producto con id: ${req.params.id} no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos el Producto con id: ${req.params.id}.`,
      });
    });
};

exports.update = (req, res) => {
  Producto.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Producto con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Producto con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar el Producto con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Producto.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Producto con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send({ message: "Producto eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Producto con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar el Producto con id: ${req.params.id}.`,
      });
    });
};

exports.findByCategoria = (req, res) => {
  //  Producto.updateMany
  Producto.find({ Categorias: req.params.categoria })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un erro al tratar de recuperar los productos con categoria: ${req.params.categoria}.`,
      });
    });
};
