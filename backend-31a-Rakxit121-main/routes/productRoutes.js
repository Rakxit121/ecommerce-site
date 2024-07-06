const router = require('express').Router();
const productController = require('../controllers/productControllers');
const authGuard = require('../middleware/authGuard');
const authGuardAdmin = require('../middleware/authGuard');


// create product api
router.post('/create_product', productController.createProduct);

// get all products api
router.get('/get_products', productController.getAllProducts);

//  get single product API
router.get('/get_product/:id', productController.getSingleProduct);

// update product API
router.put('/update_product/:id', authGuardAdmin , productController.updateProduct);

// delete product API
router.delete('/delete_product/:id',authGuardAdmin, productController.deleteProduct);


// create order API
router.post('/create_order', productController.createOrder);

// get all orders API
router.get('/get_orders', productController.getAllOrders);

// get addtocart API
router.post('/addToCart', productController.createCart);

// fetch all addtocard API

router.get('/get_carts', productController.getAllCarts); 

// delete cart API
router.delete('/delete_cart/:id', productController.deleteCart);


// // --------------- display product to the user---------------------

// router.post('/display_product/:id', authGuard, productController.displayProduct);

module.exports = router;
