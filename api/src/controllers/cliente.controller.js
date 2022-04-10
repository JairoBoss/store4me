const Cliente = require("../models/cliente.model.js");

exports.create = (req, res) => {
  if (!req.body.Nombres) {
    res.status(400).send({
      message: "El cliente debe de contener un nombre",
    });
    return;
  }

  const clienteNuevo = new Cliente({
    Nombres: req.body.Nombres,
    Apellido_Paterno: req.body.Apellido_Paterno,
    Apellido_Materno: req.body.Apellido_Materno,
    Email: req.body.Email,
    Telefono: req.body.Telefono,
  });

  clienteNuevo
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear el nuevo cliente ${clienteNuevo.Nombres}`,
      });
    });
};

exports.findAll = (req, res) => {
  Cliente.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un error al tratar de recuerar todos los cliente registrados.",
      });
    });
};

exports.findOne = (req, res) => {
  Cliente.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cliente con id: ${req.params.id} no encontrado`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Cliente con id: ${req.params.id} no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos del cliente con id: ${req.params.id}.`,
      });
    });
};

exports.update = (req, res) => {
  Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cliente con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Cliente con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar el cliente con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Cliente.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cliente con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Cliente eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Cliente con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar el cliente con id: ${req.params.id}.`,
      });
    });
};
