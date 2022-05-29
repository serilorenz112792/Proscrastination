const express = require('express'); 
const userControllers = require('../controllers/user.controller');
const router = express.Router(); 


router.post('/signup', userControllers.register)
router.get('/getAllUser',userControllers.getAll)


module.exports = router;