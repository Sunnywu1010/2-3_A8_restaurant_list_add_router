const express = require("express");
const router = express.Router();
const restaurantList = require("../../models/restaurants");

// search
router.get("/search", (req, res) => {
  const keyword = req.query.keyword;

//  find()
  restaurantList
    .find({ $or:[{name: keyword}, {category: keyword }]})
    .lean()
    .then((restaurants) => {
      res.render("index", { restaurants, keyword });
    });
});

// filter()
  // restaurantList
  //   .find()
  //   .lean()
  //   .then((restaurants) => {
  //     const restaurantsSearch = restaurants.filter(
  //       (restaurant) =>
  //         restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
  //         restaurant.category.toLowerCase().includes(keyword.toLowerCase())
  //     );
  //     res.render("index", { restaurants: restaurantsSearch, keyword });
    // });
// });
// sort
router.get("/sort", (req, res) => {
  const [property, sortBy] = req.query.sort.split("_");
  restaurantList
    .find()
    .lean()
    .sort({ [property]: sortBy })
    .then((restaurants) => {
      res.render("index", { restaurants, property });
    })
    .catch((error) => console.log(error));
});
// home page
router.get("/", (req, res) => {
  restaurantList
    .find()
    .lean()
    .then((restaurants) => {
      res.render("index", { restaurants });
    })
    .catch((error) => console.log(error));
});
module.exports = router;
