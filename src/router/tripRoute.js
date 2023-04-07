const {Router} = require('express');

const tripController = require('../controllers/tripController');

const router = Router();

//add middlewares for restricting addpost, viewpost etc
/*
const redirectPosted = (req, res, next) => {
    if (req.session.userID){
        res.redirect('/posted');
    } else {
        next();
    }
}
*/
router.get('/posted',tripController.trip_get);
router.get('/view',tripController.view_get);

module.exports = router;