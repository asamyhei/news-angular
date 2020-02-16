//Install express server
const path = require("path");
const https = require("https");
const fs = require("fs");

const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/News"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/News/index.html"));
});

/*setInterval(function() {
  https.get("https://pompous-lexicon.herokuapp.com", function(res) {
    var a;
  });
}, 300000); // every 5 minutes (300000)*/

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
