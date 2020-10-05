// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// Object holding code to use the ORM functions from orm.js
const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    }
}

// Export database functions for use in the controller
module.exports = burger