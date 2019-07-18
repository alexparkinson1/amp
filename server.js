var express = require("express"),
  app = express();

var path = require("path");

app.use(express.static("index.html"));

app.get("/#development=1", function(req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(8000, () => {
  console.log("ready");
});
