const Proveedor = require("../models/proveedor.model.js");

exports.create = (req, res) => {
  if (!req.body.Nombres) {
    res.status(400).send({
      message: "El proveedor debe de contener un nombre",
    });
    return;
  }

  const proveedorNuevo = new Proveedor({
    Nombres: req.body.Nombres,
    Apellido_Paterno: req.body.Apellido_Paterno,
    Apellido_Materno: req.body.Apellido_Materno,
    Domicilio: req.body.Domicilio,
    Telefono: req.body.Telefono,
    Citas: req.body.Citas
  });

  proveedorNuevo
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear el nuevo proveedor ${proveedorNuevo.Nombres}`,
      });
    });
};

exports.findAll = (req, res) => {
  Proveedor.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un error al tratar de recuerar todos los proveedores registrados.",
      });
    });
};

exports.findOne = (req, res) => {
  Proveedor.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Proveedor con id: ${req.params.id} no encontrado`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Proveedor con id: ${req.params.id} no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos del Proveedor con id: ${req.params.id}.`,
      });
    });
};

exports.update = (req, res) => {
  Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Proveedor con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Proveedor con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar el Proveedor con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Proveedor.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Proveedor con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Proveedor eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Proveedor con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar el Proveedor con id: ${req.params.id}.`,
      });
    });
};
