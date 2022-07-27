const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const ProductController = require("../controllers/productController");
const validation = require("../validator/validation");
const middleware = require("../middlewares/auth");



// .......................................... User APIs ...................................//
router.post( "/register",userController.registerUser);
router.post('/login', userController.loginUser)
router.get('/user/:userId',middleware.Authentication, userController.getUser)
router.put('/user/:userId',middleware.Authentication, userController.updateUserProfile)

// .......................................... User APIs ...................................//

router.post( "/products",ProductController.createProduct);

router.get('/products',middleware.Authentication, ProductController.getProduct)

module.exports = router;

