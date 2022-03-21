const db=require("../../config/mongoose")
const restaurants=require("../../restaurant.json").results
const RestaurantList=require("../restaurants")
db.once("open",()=>{
  for(let i=0;i<restaurants.length;i++){
    RestaurantList.create({
      name: restaurants[i].name,
      name_en: restaurants[i].name_en,
      category: restaurants[i].category,
      image:restaurants[i].image,
      location: restaurants[i].location,
      phone: restaurants[i].phone,
      google_map: restaurants[i].google_map,
      rating: restaurants[i].rating,
      description:restaurants[i].description
    });

  }
console.log("restaurant seeder done.")
})