module.exports = (app) => {
  const paypal = require("../controllers/paypal.controller.js");
  let router = require("express").Router();

  router.post("/creando-orden", paypal.crearOrden);

  router.get("/validando-orden", paypal.validarOrden);

  router.get("/cancelando-orden", paypal.cancelarOrden);

  app.use("/pagos", router);
};
