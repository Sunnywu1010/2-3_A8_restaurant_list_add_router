const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const bodyParser=require("body-parser")
const port = 3000;
const restaurantList = require("./restaurant.json").results;
const routes=require("./routes")
require("./config/mongoose")

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))
app.use(routes)

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`http://lacalhost:${port}`);
});
