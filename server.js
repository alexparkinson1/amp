var express = require("express"),
  app = express();

var path = require("path");

app.use(express.static("public"));

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/index.html"));
// });

app.listen(8000, () => {
  console.log("ready");
});
