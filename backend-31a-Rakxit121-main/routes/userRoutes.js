const router = require('express').Router();
const userController = require('../controllers/userControllers');

router.post('/create', userController.createUser) 

// task 1: create login API code
// router.post("/login",(req,res)=>{
//     res.send("Welcome to LOGIN API.")
// })

router.post('/login', userController.loginUser)

router.get('/get_users', userController.getAllUsers);

// router.get('/get_user/:id', userController.getSingleUser);
router.put('/update_user/:id', userController.updateUser);
router.delete('/delete_user/:id', userController.deleteUser);

// export
module.exports = router;