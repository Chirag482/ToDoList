const express = require("express");

const port = 8000;
const app = express();
const db = require("./config/mongoose");

app.use(express.urlencoded());
//use express router
app.use("/", require("./routes"));

//setting views
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log("error in setting up the server");
    return;
  }
  console.log("Server in running on port : ", port);
});
