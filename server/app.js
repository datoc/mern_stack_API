var mongoose = require("mongoose");
var express = require("express");
var router = require("./route");
var cors = require("cors");
var bodyp = require("body-parser");

var app = express();
const URL = "mongodb://localhost:27017/test";

mongoose.connect(URL, {useUnifiedTopology : true, useNewUrlParser : true}, function(err) {
    if(err) console.log("Database not connected!");
    console.log("Database connected!");
});

app.use(bodyp.json());
app.use(bodyp.urlencoded({ extended: true }));
app.use(cors());
app.use("/", router);

app.listen(4000, function(err) {
    if(err) throw err;
    console.log("Server started!");
});