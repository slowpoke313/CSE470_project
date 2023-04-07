const posted_trip = require("../models/trips");

//view rides
//view posted rides
module.exports.trip_get = async (req, res) => {
    const current_user = req.session.userID;
    const user  = await posted_trip.find({poster:current_user});   //search using:match using
    
    res.render("posted",{user:user});  //file name
}

module.exports.view_get = async (req, res) => {
    
    try{

        //db.inventory.find( { price: { $not: { $gt: 1.99 } } } )
        const current_user = req.session.userID;
        //const all_trip = await posted_trip.find({poster:{$not:{current_user}}});  //view rides posted by other riders
        const all_trip = await posted_trip.find({});
        //console.log(all_trip);
        res.render("view",{all_trip:all_trip});


    }catch(error){
        res.status(400).send(error);
    }
    
    
    
    //const current_user = req.session.userID;
    //const user  = await posted_trip.find({poster:current_user});   //search using:match using
    
    //res.render("posted",{user:user});  //file name
}

