module.exports = (app) => {
  const ProductoController = require("../controllers/producto.controller.js");
  const { verifyUserToken } = require("../middleware/authMiddleware");
  var router = require("express").Router();

  router.post("/", verifyUserToken, ProductoController.create);

  router.get("/", ProductoController.findAll);

  router.get("/:id", ProductoController.findOne);

  router.get("/categoria/:categoria", ProductoController.findByCategoria);

  router.put("/:id", verifyUserToken, ProductoController.update);

  router.delete("/:id", verifyUserToken, ProductoController.delete);

  app.use("/api/producto", router);
};
