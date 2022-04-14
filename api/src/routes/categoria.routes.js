module.exports = (app) => {
  const CategoriaController = require("../controllers/categoria.controller.js");
  const { verifyUserToken } = require("../middleware/authMiddleware");
  var router = require("express").Router();

  router.post("/", CategoriaController.create);

  router.get("/", CategoriaController.findAll);

  router.get("/:id", CategoriaController.findOne);  

  router.put("/:id", verifyUserToken, CategoriaController.update);

  router.delete("/:id", verifyUserToken, CategoriaController.delete);

  app.use("/api/categoria", router);
};
