
const Student = require("../models/registers");



module.exports.register_get = (req, res) => {
    res.render("register_form");
}

module.exports.register_post = async (req, res)=>{
    try{
        const password = req.body.password;
        const cpassword = req.body.confirm_password;

        if (password==cpassword){
            
            const studentRegister = new Student({   //show a prompt that the email or password is
                                                    // not unique
                first_name: req.body.first_name,
                last_name: req.body.first_name,
                department: req.body.last_name,
                email: req.body.email,
                password: password ,
                confirm_password: cpassword,
                phone_no:req.body.phone_no,
                gender: req.body.gender
            })
            const registered = await studentRegister.save();
            res.status(201).render("login");


            }else{
                
                res.send("password not matching")
            }
        //const registered = await Student.save();
               //res.status(201).render(index);
        
         } catch(error){
        res.status(400).send(error);
    }
}

module.exports.login_get = (req, res) => {
    res.render("login");
    console.log(req.session);
}

module.exports.login_post = async (req, res) => {  ///add form and use the name attribute for that
    //res.send(req.body);

    try{

        const email = req.body.email;
        const password = req.body.password;

        const user  = await Student.findOne({email:email});
        //res.send(useremail);
        //console.log(useremail);
         
        console.log(`${email} and password is ${password}`);
        if (user.password==password){

            req.session.userID = user._id;
            const person = user._id;
            req.session.name = user.first_name;
            res.render("user_dash",{person:person});
            res.redirect('/user_dash'); 
        }else{
            res.send("password are not matching");
        }

    }catch (error){
        res.status(400).send(error);
    }
}

module.exports.logout_post = (req, res) => {
    req.session.destroy( err => {
        if (err){
            return res.redirect('/');
        }

        res.clearCookie('sid');
        res.redirect('/login');
    });

}
