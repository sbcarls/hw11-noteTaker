const express = require("express");

// Set up initial port
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname +"public")));