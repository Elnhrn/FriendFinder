// npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express configuration: sets up basic properties for our express server
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setting up the current folder to public
app.use(express.static("public"));

// router
// routes give our server a "map" of how to respond when users visit or request data from various URLstj
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// listener
// "starts" the server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});