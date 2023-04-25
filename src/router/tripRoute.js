const {Router} = require('express');

const tripController = require('../controllers/tripController');

const router = Router();

//add middlewares for restricting addpost, viewpost etc

const redirectLogin = (req, res, next) => {
    if (req.session.userID){
        next();
    } else {
        
        res.redirect('/login');
    }
}

router.get('/posted',redirectLogin ,tripController.trip_get);
router.get('/view', redirectLogin,tripController.view_get);
//mon10th
//router.post('/select',tripController.sel_ride);

module.exports = router;