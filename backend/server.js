const express = require("express");

const app = express();

//route
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
