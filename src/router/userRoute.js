const {Router} = require('express');

const userControl = require('../controllers/userController');

const router = Router();

const isLogout = (req, res, next) => {
    if (req.session.userID){
        next();
    } else {
        
        res.redirect('/login');
    }
}

router.get('/editProfile',isLogout,userControl.edit_get);
router.post('/editProfile',isLogout,userControl.edit_post);
router.get('/user_delete',isLogout,userControl.delete_get);
router.post('/user_delete',isLogout,userControl.delete_post);
router.post('/complain_post',isLogout,userControl.complain_post);
router.post('/post_ride',isLogout,userControl.post_ride);



module.exports = router;