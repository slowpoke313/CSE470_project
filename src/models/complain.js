const { default: mongoose } = require("mongoose");

const complainSchema = new mongoose.Schema({
    category:{
        type:String,
        required: true
    },
    details:{
        type:String,
        required: true
    },
    lodged_by:{
        type:String,
        required: true 
    }

    
})

const complain = new mongoose.model("Complain",complainSchema);


module.exports = complain;