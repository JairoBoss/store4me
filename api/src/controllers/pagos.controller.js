const Pago = require("../models/pago.model");

exports.findAll = (req, res) => {
  Pago.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un erro al tratar de recuperar los pagos registrados.",
      });
    });
};

exports.findOne = (req, res) => {
  Pago.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Pago con id: ${req.params.id} no encontrada`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Pago con id: ${req.params.id} no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos del pago con id: ${req.params.id}.`,
      });
    });
};

exports.delete = (req, res) => {
  Pago.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Pago con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Pago eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Pago con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar el pago con id: ${req.params.id}.`,
      });
    });
};

exports.findAllPaid = (req, res) => {
  Pago.find({Pagado: true})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un erro al tratar de recuperar los pagos registrados.",
      });
    });
};