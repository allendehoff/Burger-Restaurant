// Import MySQL connection.
const connection = require("../config/connection.js");

//Object holding all SQL functions
const orm = {
    // SQL function for displaying all burgers
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";"
        connection.query(queryString, function (err, results) {
            if (err) throw err;
            cb(results);
        })
    },
    // SQL function for adding a new burger
    insertOne: function (tableInput, col, val, cb) {
        const queryString = "INSERT INTO " + tableInput + "(" + col + ") VALUES (?)"
        connection.query(queryString, val, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    //SQL function for changing a burger's status to 'devoured'
    updateOne: function (tableInput, colVal, condition, cb) {
        const queryString = "UPDATE " + tableInput + " SET " + colVal + " WHERE " + condition;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

// Export the orm object for the model (burger.js).
module.exports = orm;