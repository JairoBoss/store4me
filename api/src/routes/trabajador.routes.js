module.exports = (app) => {
    const TrabajadorController = require("../controllers/trabajador.controller.js");
    const { verifyUserToken } = require("../middleware/authMiddleware");
    var router = require("express").Router();

    router.post("/", TrabajadorController.create);

    router.post("/login", TrabajadorController.login);

    router.get("/", verifyUserToken, TrabajadorController.findAll)

    router.get("/:id", verifyUserToken, TrabajadorController.findOne)

    router.put("/:id", verifyUserToken, TrabajadorController.update)

    router.delete("/:id", verifyUserToken, TrabajadorController.delete)

    app.use('/api/trabajador', router);

};