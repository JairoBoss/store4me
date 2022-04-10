module.exports = (app) => {
  const ProveedorController = require("../controllers/proveedor.controller.js");
  const { verifyUserToken } = require("../middleware/authMiddleware");
  var router = require("express").Router();

  router.post("/", ProveedorController.create);

  router.get("/", ProveedorController.findAll);

  router.get("/:id", ProveedorController.findOne);

  router.put("/:id", verifyUserToken, ProveedorController.update);

  router.delete("/:id", verifyUserToken, ProveedorController.delete);

  app.use("/api/proveedor", router);
};
