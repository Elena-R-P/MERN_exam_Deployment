const BoilerPlateController = require("../controllers/boilerplate.controller");


module.exports = app =>{
    app.get("/api/pets", BoilerPlateController.findAllBoilerPlates)
    app.post("/api/pets/create", BoilerPlateController.createBoilerPlate)
    app.get("/api/pets/:id", BoilerPlateController.findOneBoilerPlate)
    app.put("/api/pets/update/:id", BoilerPlateController.updateOneBoilerPlate)
    app.delete("/api/pets/delete/:id", BoilerPlateController.deleteBoilerPlate)
}
