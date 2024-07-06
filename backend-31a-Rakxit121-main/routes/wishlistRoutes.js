const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');

// Route to create a favourite
router.post('/create_favourite', wishlistController.createFavourites);

// Route to get favourites
router.get('/get_favourite/:id', wishlistController.getFavourites);

// Route to delete a favourite
router.delete('/delete_favourite/:id', wishlistController.deleteFavourite);

module.exports = router;
