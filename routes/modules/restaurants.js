const express = require("express");
const router = express.Router();
const restaurantList = require("../../models/restaurants");

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
module.exports = router;
