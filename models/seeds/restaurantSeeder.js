const db = require("../../config/mongoose");
const restaurants = require("../../restaurant.json").results;
const RestaurantList = require("../restaurants");
db.once("open", () => {
  Promise.all(
    Array.from(restaurants, (restaurant) => {
      return RestaurantList.create({
        name: restaurant.name,
        name_en: restaurant.name_en,
        category: restaurant.category,
        image: restaurant.image,
        location: restaurant.location,
        phone: restaurant.phone,
        google_map: restaurant.google_map,
        rating: restaurant.rating,
        description: restaurant.description,
      });
    })
  ).then(() => {
    console.log("restaurant create done.");
    process.exit();
  });
});
module.exports = db;