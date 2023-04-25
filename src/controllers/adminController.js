const admin = require("../models/admin");
const Student = require("../models/registers");
const Complaints = require("../models/complain");



module.exports.admin_get = (req, res) => {
    res.render("adminLogin");
}



module.exports.admin_post = async (req, res) => {
    try{

        const pass = req.body.password;

        const ad  = await admin.findOne({password:pass});
        if(ad.password == pass){
            req.session.userID = ad._id;
            res.redirect('/admin_dash');
        }else{
            res.send("Wrong Password For Admin Login");
        }

    }catch (error){
        res.status(400).send(error);
    }
}


module.exports.manage_get = async (req, res) => {
    const data = await Student.find({});
    res.render("manageAccount",{data:data});

}

module.exports.manage_post = async (req, res) => {
    try{

        const userID = req.body.user_id;  //user id of the student
        console.log(userID);
        const store = await Student.deleteOne({_id:userID});
        res.redirect('/manageAccount');



    }catch (error){
        res.status(400).send(error);
    }
}

module.exports.manageComplaint_get = async (req, res) => {
    const complaints = await Complaints.find({});


    res.render("manageComplaint",{comp:complaints});
}

module.exports.manageComplaint_post = async (req, res) => {
    try{

        const compID = req.body.comp_id;  //user id of the student
        const store = await Complaints.deleteOne({_id:compID});
        res.redirect('/manageComplaint');



    }catch (error){
        res.status(400).send(error);
    }
}