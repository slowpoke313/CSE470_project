
const {Router} = require('express');

const authController = require('../controllers/authController');

const router = Router();



const redirectDash = (req, res, next) => {
    if (req.session.userID){
        res.redirect('/user_dash');
    } else {
        next();
    }
}





router.get('/register_form',redirectDash, authController.register_get);
router.post('/register_form',redirectDash,authController.register_post); //auth controller e register_poat namer function create korbo
router.get('/login',redirectDash,authController.login_get);
router.post('/login',redirectDash,authController.login_post);
router.post('/logout',authController.logout_post);
/*
app.get("/login", (req, res) => {
    res.render("login");
})
*/


module.exports = router;