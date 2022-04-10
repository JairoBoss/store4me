module.exports = (app) => {
  const ProductoController = require("../controllers/producto.controller.js");
  const { verifyUserToken } = require("../middleware/authMiddleware");
  var router = require("express").Router();

  router.post("/", ProductoController.create);

  router.get("/", ProductoController.findAll);

  router.get("/:id", ProductoController.findOne);

  router.put("/:id", verifyUserToken, ProductoController.update);

  router.delete("/:id", verifyUserToken, ProductoController.delete);

  app.use("/api/producto", router);
};
