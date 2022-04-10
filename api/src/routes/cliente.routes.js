module.exports = (app) => {
    const ClienteController = require("../controllers/cliente.controller.js");
    var router = require("express").Router();

    router.post("/", ClienteController.create);

    router.get("/", ClienteController.findAll)

    router.get("/:id", ClienteController.findOne)

    router.put("/:id", ClienteController.update)

    router.delete("/:id", ClienteController.delete)

    app.use('/api/cliente', router);

};