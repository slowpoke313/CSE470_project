const { default: mongoose } = require("mongoose");

const studentScheme = new mongoose.Schema({
    first_name: {
        type:String,
        required:true
    },
    last_name: {
        type:String,
        required:true
    },
    department: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirm_password:{
        type:String,
        required:true
    },
    phone_no:{
        type:Number,
        required:true,
        unique:true
    }
    })

    //now we need to create a collection
    //const capitalLetter  = new mongoose.model("collectionname")
    const Student = new mongoose.model("Student",studentScheme);

    module.exports = Student;