// Import MySQL connection.
const connection = require("../config/connection.js");

//Object holding all SQL functions
const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";"
        connection.query(queryString, function(err, results){
            if (err) throw err;
            cb(results);
        })
    },
    insertOne: function (tableInput, col, val, cb) {
        const queryString = "INSERT INTO " + tableInput + "(" + col + ") VALUES (?)"
        connection.query(queryString, val, function(err, result){
            if(err) throw err;
            cb(result)
        })
    },
    updateOne: function () {

    }
}

// Export the orm object for the model (burger.js).
module.exports = orm;