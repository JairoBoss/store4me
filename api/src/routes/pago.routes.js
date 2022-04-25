module.exports = (app) => {
  const PagoController = require("../controllers/pagos.controller.js");
  const { verifyUserToken } = require("../middleware/authMiddleware");
  var router = require("express").Router();

  router.get("/", verifyUserToken, PagoController.findAll);
  
  router.get("/paid", verifyUserToken, PagoController.findAllPaid);

  router.get("/:id", verifyUserToken, PagoController.findOne);

  router.delete("/:id", verifyUserToken, PagoController.delete);

  app.use("/api/pagost", router);
};
