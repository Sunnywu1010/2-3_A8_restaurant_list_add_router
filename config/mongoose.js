const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost/restaurant_list_v1", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db=mongoose.connection
db.on("error",()=>{
  console.log("mongodb error")
})
db.once("open",()=>{
  console.log("mongoose connected.")
})
module.exports=db