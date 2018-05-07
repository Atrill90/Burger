// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    all: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (value, cb){
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [value], function (error, results){
        if (error) throw error;
        cb(results);
    })
    },
    delete: function (id, cb){
        let query = "DELETE FROM burgers WHERE id = ? ";
        connection.query(query, [id], function (error,results){
            if (error) throw error;
            cb(results);
        })
    },
    update: function (id, cb ){
        let query = "UPDATE burgers SET devoured = True WHERE id = ? ";
        connection.query(query,[id], function(error,results){
            if (error) throw error;
            cb(results);
        })
    }



}
    

module.exports = orm;