const express = require("express");
const app = express();
const path = require("path");

// Initializes port
const PORT = process.env.PORT || 3001;

// Express
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.use(express.json());

// File Mapping
require("./routes/api")(app);
require("./routes/view")(app);

// Start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });