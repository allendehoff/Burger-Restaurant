const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Route for getting all burgers and sending them to index.handlebars
router.get("/", function(req, res){
    burger.selectAll(function(data){
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})

// Export routes for server.js to use.
module.exports = router;