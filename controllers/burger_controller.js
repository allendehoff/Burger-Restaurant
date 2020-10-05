const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Route for getting all burgers and sending them to index.handlebars
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })

router.post("/api/burgers", function(req,res){
    burger.insertOne(
        ["burger_name"],
        [req.body.name], 
        function(result){
            res.json(result)
        })
})
})

// Export routes for server.js to use.
module.exports = router;