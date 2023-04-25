const posted_trip = require("../models/trips");
const booked_trip = require("../models/booked");


/*
the below function prints the posted ride by the current user
*/ 
module.exports.trip_get = async (req, res) => {
    const current_user = req.session.userID;
    const trips  = await posted_trip.find({poster:current_user});   //search using:match using
    
    res.render("posted",{trips:trips});  //file name, sending data to a hbs file
}




/*
the below function prints the trips other users in the view page.
*/ 
module.exports.view_get = async (req, res) => {
    
    try{

        //db.inventory.find( { price: { $not: { $gt: 1.99 } } } )
        const current_user = req.session.userID;
        
        const all_trip = await posted_trip.find({poster: {$ne: current_user}});

        res.render("view",{all_trip: all_trip});


    }catch(error){
        res.status(400).send(error);
    }
    
    
    
    //const current_user = req.session.userID;
    //const user  = await posted_trip.find({poster:current_user});   //search using:match using
    
    //res.render("posted",{user:user});  //file name
}

