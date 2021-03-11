const express = require("express");
const port = 8000;
const app = express();

app.listen(port, function (err) {
  if (err) {
    console.log("error in setting up the server");
    return;
  }
  console.log("Server in running on port : ", port);
});
