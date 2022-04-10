const Trabajador = require("../models/trabajador.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// Crear y guardar un nuevo trabajador
exports.create = async (req, res) => {
  if (!req.body.Nombres) {
    res.status(400).send({
      message: "El trabajador debe de tener un nombre",
    });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hasPassword = await bcrypt.hash(req.body.Contraseña, salt);

  const trabajadorNuevo = new Trabajador({
    Nombres: req.body.Nombres,
    Apellido_Paterno: req.body.Apellido_Paterno,
    Apellido_Materno: req.body.Apellido_Materno,
    Foto: req.body.Foto,
    Domicilio: req.body.Domicilio,
    Email: req.body.Email,
    Telefono: req.body.Telefono,
    Dia_Entrada: req.body.Dia_Entrada,
    Rol: req.body.Rol,
    Contraseña: hasPassword,
  });
  trabajadorNuevo.save((err, trabajadorRegistrado) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear al trabajador ${trabajadorNuevo.Nombres}`,
      });
    } else {
      let payload = {
        id: trabajadorRegistrado._id,
        Email: req.body.Email || 0,
      };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET);

      res.status(200).send({ trabajadorRegistrado, token });
    }
  });
};

exports.login = async (req, res) => {
  Trabajador.findOne({ Email: req.body.email }, async (err, user) => {
    
    if (err) {
      console.log(err);
    } else {
      if (user) {
        const validPass = await bcrypt.compare(
          req.body.password,
          user.Contraseña
        );
        if (!validPass)
          return res.status(401).send("Correo o contraseña incorrectas");

        let payload = { id: user._id, user_type_id: user.user_type_id };
        const token = jwt.sign(payload, process.env.TOKEN_SECRET);

        res.status(200).header("auth-token", token).send({ user, token: token });
      } else {
        res.status(401).send("Acceso denegado");
      }
    }
  });
};

exports.findAll = (req, res) => {
  Trabajador.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un erro al tratar de recuperar los trabajadores registrados.",
      });
    });
};

exports.findOne = (req, res) => {
  Trabajador.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Trabajador con id: ${req.params.id} no encontrado`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Trabajador con id: ${req.params.id} no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos del trabajador con id: ${req.params.id}.`,
      });
    });
};

exports.update = (req, res) => {
  Trabajador.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Trabajdor con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Trabajdor con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar el trabajdor con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Trabajador.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Trabajdor con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Trabajador eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Trabajdor con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar a trabajador con id: ${req.params.id}.`,
      });
    });
};

exports.findByCorreo = (req, res) => {
  Trabajador.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Trabajador con id: ${req.params.id} no encontrado`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Trabajador con id: ${req.params.id} no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos del trabajador con id: ${req.params.id}.`,
      });
    });
};
