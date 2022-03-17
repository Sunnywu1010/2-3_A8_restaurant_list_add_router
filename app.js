// 使用 require 載入 Express
const express = require("express");
// 設定在 Express 中使用的樣版引擎
const exphbs = require("express-handlebars");
// 把載入的 express 套件在執行後，存成一個名為 app 的變數
const app = express();
// 定義要使用連接埠號 (port number) ，預設 3000
const port = 3000;
// 載入restaurantList
const restaurantList = require("./restaurant.json").results;

// app.engine：定義要使用的樣板引擎
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// 靜態檔案，
app.use(express.static("public"));

// 使用 Express 傳送回應給使用者
app.get("/", (req, res) => {
  const restaurants = restaurantList;
  res.render("index", { restaurants });
});

// params
app.get("/restaurants/:restaurants_id", (req, res) => {
  const restaurantId = req.params.restaurants_id;
  const restaurant = restaurantList.find(
    (restaurant) => restaurant.id.toString() === restaurantId
  );
  res.render("show", { restaurant });
});

// search
app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  const restaurants = restaurantList.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(keyword.toLowerCase())
  );
  res.render("index", { restaurants, keyword });
});

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`http://lacalhost:${port}`);
});
