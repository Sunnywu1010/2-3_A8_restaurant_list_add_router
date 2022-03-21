const express=require("express")
const router=express.Router()
const restaurantList = require("../../models/restaurants");

// params
router.get("/restaurants/:restaurants_id", (req, res) => {
  const restaurantId = req.params.restaurants_id;
  const restaurant = restaurantList.find(
    (restaurant) => restaurant.id.toString() === restaurantId
  );
  res.render("show", { restaurant });
});
module.exports=router


