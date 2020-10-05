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
        res.render("index", hbsObject);
    })
});

// Route for adding a new burger
router.post("/api/burgers", function (req, res) {
    burger.insertOne(
        ["burger_name"],
        [req.body.name],
        function (result) {
            res.json(result)
        })
});

// Route for changing a burger's status to 'devoured'
router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id

    burger.upDateOne([
        "devoured = true"
    ], condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

// Export routes for server.js to use.
module.exports = router;