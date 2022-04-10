const Venta = require("../models/venta.model.js");

exports.create = (req, res) => {
  if (!req.body.Productos) {
    res.status(400).send({
      message: "La venta debe de contener productos",
    });
    return;
  }

  const VentaNueva = new Venta({
    Productos: req.body.Productos,
    Trabajador: req.body.Trabajador,
    Cliente: req.body.Cliente,
    Total: req.body.Total
  });

  VentaNueva
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear la venta`,
      });
    });
};

exports.findAll = (req, res) => {
  Venta.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un erro al tratar de recuperar las ventas registradas.",
      });
    });
};

exports.findOne = (req, res) => {
  Venta.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Venta con id: ${req.params.id} no encontrada`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Venta con id: ${req.params.id} no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos de la Venta con id: ${req.params.id}.`,
      });
    });
};

exports.update = (req, res) => {
  Venta.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Venta con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Venta con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar el Venta con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Venta.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Venta con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send({ message: "Venta eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Venta con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar el Venta con id: ${req.params.id}.`,
      });
    });
};
