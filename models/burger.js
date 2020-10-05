const connection = require("../config/connection.js");
// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// Object holding code to use the ORM functions from orm.js
const burger = {
    // Runs ORM function for displaying all burgers
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        })
    },
    // Runs ORM function for adding a new burger
    insertOne: function (col, val, cb) {
        orm.insertOne("burgers", col, val, function (res) {
            cb(res)
        })
    },
    //Runs ORM function for changing a burger's status to 'devoured'
    upDateOne: function (colVal, condition, cb) {
        orm.updateOne("burgers", colVal, condition, function (res) {
            cb(res)
        })
    }
}

// Export database functions for use in the controller
module.exports = burger