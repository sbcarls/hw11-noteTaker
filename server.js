const express = require("express");

// Initializes port
const PORT = process.env.PORT || 3001;

// Express
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname +"public")));

app.use(express.json());

// File Mapping
require("./routes/api")(app);
require("./routes/html")(app);

// Start server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });