const {Router} = require('express');

const showTripController = require('../controllers/show_tripController');

const router = Router();



const redirectLogin = (req, res, next) => {
    if (req.session.userID){
        next();
    } else {
        
        res.redirect('/login');
    }
}



router.get('/booked_rides',redirectLogin,showTripController.booked_get);      //for showing the booked rides
router.post('/selected_post',redirectLogin,showTripController.selected_post);  
router.post('/trip_detail',redirectLogin,showTripController.detail_post);

module.exports = router;