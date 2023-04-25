const { default: mongoose } = require("mongoose");

const bookedSchema = new mongoose.Schema({
    booked_by:{
        type:String,
        required: false
    },
    trip_id:{
        type:String,
        required: true
    }
    
})

const booked_list = new mongoose.model("Booked",bookedSchema);


module.exports = booked_list;