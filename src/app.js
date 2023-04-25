

const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const session = require('express-session');


require("./db/conn"); 

const authRoutes = require("./router/auth");  //require the router
const tripRoute =  require("./router/tripRoute");
const view_tripRoute = require("./router/view_trip");
const adminRoute = require("./router/adminRoute");
const userRoute = require("./router/userRoute");

const Trip = require("./models/trips");

const { json } = require("express");

const port = 3001;

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
//const new_path = path.join(__dirname,"../templates/views")

app.use(express.json());
//app.use(express.json());
app.use(express.urlencoded({extended:false}));

//console.log(path.join(__dirname));
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);


app.use(session({
    name: 'sid',
    resave: false,
    saveUninitialized: false, 
    secret: 'hello world',
    cookie: {
        maxAge: 1000*60*60*20,
        sameSite: true,
        
    }
}))
hbs.registerPartials(partials_path);

app.get("/",(req,res) => {
    if(req.session.userID){
        console.log('yes');
    }else{
        console.log("no");
    }
    res.render("index")
});



app.use(authRoutes);
app.use(tripRoute);
app.use(view_tripRoute);
app.use(adminRoute);
app.use(userRoute);






//app.get - for getting data
//app.put - for edit data
//app.post - for adding data
//app.delete - for deleting data


//create a new user in out db

app.get("/admin_dash",(req,res)=>{
    res.render("admin_dash");
})


app.get("/user_dash", (req, res) => {
    res.render("user_dash");
}) 




app.get("/select", (req, res) => {
    res.render("select");
}) 

app.get("/complain", (req, res) => {
    res.render("complain");
})

app.get("/post_ride", (req, res) => {
    res.render("post_ride");
})





app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
})

