module.exports = (app) => {
  const VentaController = require("../controllers/venta.controller.js");
  const { verifyUserToken } = require("../middleware/authMiddleware");
  var router = require("express").Router();

  router.post("/", verifyUserToken, VentaController.create);

  router.get("/", verifyUserToken, VentaController.findAll);

  router.get("/:id", verifyUserToken, VentaController.findOne);

  router.put("/:id", verifyUserToken, VentaController.update);

  router.delete("/:id", verifyUserToken, VentaController.delete);

  app.use("/api/venta", router);
};
