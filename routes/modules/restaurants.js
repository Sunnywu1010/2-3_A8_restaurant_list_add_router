const express = require("express");
const router = express.Router();
const restaurantList = require("../../models/restaurants");

// add restaurant
router.get("/new", (req, res) => {
  res.render("new");
});
// params
router.get("/:restaurants_id", (req, res) => {
  const restaurantId = req.params.restaurants_id;
  restaurantList
    .findById(restaurantId)
    .lean()
    .then((restaurant) => {
      res.render("show", { restaurant });
    })
    .catch((error) => console.log(error));
});

router.post("/", (req, res) => {
  const {
    name,
    name_en,
    category,
    image,
    location,
    phone,
    google_map,
    rating,
    description,
  } = req.body;
  restaurantList
    .create({
      name,
      name_en,
      category,
      image,
      location,
      phone,
      google_map,
      rating,
      description,
    })
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});
module.exports = router;
