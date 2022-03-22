const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const routes = require("./routes");
require("./config/mongoose");

app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`http://lacalhost:${port}`);
});
