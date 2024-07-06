const mongoose = require('mongoose');
 
const favouritesSchema = new mongoose.Schema({
 
   
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users',
        required : true
    },
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'products',
        required : true
    },
   
   
 
});
 
const Favourites = mongoose.model('favourites',favouritesSchema);
module.exports = Favourites;
