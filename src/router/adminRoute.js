const {Router} = require('express');

const adminController = require('../controllers/adminController');

const router = Router();

const redirectDash = (req, res, next) => {
    if (req.session.userID){
        res.redirect('/admin_dash');
    } else {
        next();
    }
}

const redirectAdminLogin = (req, res, next) => {
    if (req.session.userID){
        next();
    } else {
        
        res.redirect('/adminLogin');
    }
}

router.get('/adminLogin',redirectDash, adminController.admin_get);
router.post('/adminLogin',redirectDash,adminController.admin_post);
router.get('/manageAccount',redirectAdminLogin,adminController.manage_get);
router.post('/manageAccount',redirectAdminLogin,adminController.manage_post);
router.get('/manageComplaint',redirectAdminLogin,adminController.manageComplaint_get);
router.post('/manageComplaint',redirectAdminLogin,adminController.manageComplaint_post);



module.exports = router;