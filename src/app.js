

const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const session = require('express-session');


require("./db/conn"); 

const authRoutes = require("./router/auth");  //require the router
const tripRoute =  require("./router/tripRoute");

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
    res.render("index")
});

//create a new user in the database


//creating the trip database


app.post("/post_ride",async (req, res) => {
    try{
            
        const trips = new Trip({   //show a prompt that the email or password is
            poster: req.session.userID,
            name: req.session.name,                                   // not unique
            trip_t: req.body.trip_t,
            loc: req.body.loc,
            p_class: req.body.p_class,
            dir: req.body.dir,
            gender:req.body.gender,
            date:req.body.date,
            dep:req.body.dep
        })
        const posted = await trips.save();
        res.status(201).render("index");


            
            
        //const registered = await Student.save();
               //res.status(201).render(index);
        
         } catch(error){
        res.status(400).send(error);
    }
}) 

//printing the values from the student database
/*
app.get("/view", async (req,res)=>{
    try{
        const things = await Trip.find({});  //use schema name
        res.render("view", {
            things
        });
        console.log(things);
    }catch(error){
        res.status(400).send(error);
    }
})
*/


app.use(authRoutes);
app.use(tripRoute);






//app.get - for getting data
//app.put - for edit data
//app.post - for adding data
//app.delete - for deleting data


//create a new user in out db




app.get("/user_dash", (req, res) => {
    res.render("user_dash");
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

