const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;
// ROUTES
// load routes
const burgerController = require("./controllers/burgers_controller.js");

let app = express();
 // MIDDLEWARE

 //Express handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// STATIC FOLDER
app.use(express.static("public"));

// USE ROUTES
app.use('/', burgerController);

//Listening PORT
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

