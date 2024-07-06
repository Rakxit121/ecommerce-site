// Import the necessary model
const Favourites = require('../model/wishlistModel');

// Controller function to create a favourite
const createFavourites = async (req, res) => {
    console.log(req.body);
    const { userId, productId } = req.body;

    if (!userId || !productId) {
        return res.json({
            success: false,
            message: "All fields are required"
        });
    }

    try {
        const favourite = await Favourites.findOne({
            userId: userId,
            productId: productId
        });

        if (favourite) {
            return res.json({
                success: false,
                message: "You've already added it"
            });
        }

        const newFavourite = new Favourites({
            userId: userId,
            productId: productId,
        });

        await newFavourite.save();

        res.status(200).json({
            success: true,
            message: "Added Favourite successfully",
            data: newFavourite
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

// Controller function to get favourites
const getFavourites = async (req, res) => {
    const userId = req.params.id;
    const requestedPage = parseInt(req.query._page, 5);
    const limit = parseInt(req.query._limit, 5);
    const skip = (requestedPage - 1) * limit;

    try {
        const favourites = await Favourites.find({ userId: userId })
            .populate('productId userId', 'productName, productImage ')
            .skip(skip)
            .limit(limit);

        res.json({
            success: true,
            message: "Favourites Fetched successfully",
            favourites: favourites
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};


// Controller function to delete a favourite
const deleteFavourite = async (req, res) => {
    try {
        const deletedFavourite = await Favourites.findByIdAndDelete(req.params.id);

        if (!deletedFavourite) {
            return res.json({
                success: false,
                message: "Not found"
            });
        }

        res.json({
            success: true,
            message: "Favourite Removed"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

module.exports = {
    createFavourites,
    getFavourites,
    deleteFavourite
};
