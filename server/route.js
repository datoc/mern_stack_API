var express = require("express");
var mongoose = require("mongoose");
var route = express.Router();

var schema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        max : 30
    },
    lastname : {
        type : String,
        required : true,
        max : 30
    },
    email : {
        type : String,
        required : true,
        max : 255
    },
    password : {
        type : String,
        required : true,
        max : 10
    }
});

var User_Model = mongoose.model("users", schema);

route.get("/", function(request, response) {
    response.send("<a href='http://localhost:3000'>Insert</a>");
});

route.post("/create", async function(request, response) {
    var NAME = request.body.name;
    var LASTNAME = request.body.lastname;
    var EMAIL = request.body.email;
    var PASS = request.body.password;

    var newUser = new User_Model({
        name : NAME,
        lastname : LASTNAME,
        email : EMAIL,
        password : PASS
    });

    newUser.save().then(function(msg) {
        console.log("User created");
    }).catch(function(msg) {
        console.log(msg);
    });
});

route.get("/users", function(request, response) {
    User_Model.find().then(function(result) {
        response.json(result);
    }).catch(function(err) {
        response.send(err);
    });
});

route.get("/users/:id", function(request, response) {
    var id = request.params.id;
    User_Model.find().where("_id").equals(id).then(function(result) {
        response.json(result);
    }).catch(function(err) {
        response.send(err);
    });
});

route.get("/users/limit/:limit_num", function(request, response) {
    var l = Number.parseInt(request.params.limit_num);
    User_Model.find().limit(l).then(function(result) {
        response.json(result);
    }).catch(function(err) {
        response.send(err);
    });
});

module.exports = route;