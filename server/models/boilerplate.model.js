const mongoose = require("mongoose")


const BoilerPlateSchema = new mongoose.Schema({
    petName:{
        type: String,
        required:[true, "Can not be empty"],
        minLength: [3, "Must be at least 3 characters long"],
    },
    type:{
        type: String,
        required:[true, "Can not be empty"],
        minLength: [3, "Must be at least 3 characters long"],
    },
    description:{
        type: String,
        required:[true, "Can not be empty"],
        minLength: [3, "Must be at least 3 characters long"],
    },
    skill1:{
        type: String,
    },
    skill2:{
        type: String,
    },
    skill3:{
        type: String,
    },
    likes: {
        type: Number,
        default:0
    },

}, {timestamps:true})


const BoilerPlate = mongoose.model("BoilerPlate", BoilerPlateSchema );

module.exports = BoilerPlate;
