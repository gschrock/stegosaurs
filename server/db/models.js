var mongoose = require('mongoose');

// Create the schema
var restSchema = new mongoose.Schema({
  restaurantName: { type: String },
  restaurantAddress: { type: String },
  priceRating: { type: String },
  serviceRating: { type: String },
  foodRating: { type: String },
  ambienceRating: { type: String },
  restaurantReview: { type: String },
  userEmail: { type: String } 
 });

//Export a Restaurant model to be used in the controllers file.
module.exports = mongoose.model("Restaurant", restSchema);
