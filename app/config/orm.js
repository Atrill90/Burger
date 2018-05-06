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
}
//     insertOne: function (){
//         connection.query("INSERT INTO burgers (burger_name, devoured) VALUES ('','')", function (err,results,fields){
//         if (err) throw err;
//         console.log(results);
//         });
//     },
//     updateOne: function (){
//         connection.query("UPDATE burgers SET (burger_name,devoured) VALUES ('','') ", function (err, results, fields){
//             if (err) throw err;
//             console.log(results);
//         });
//     },
//     delete: function (){
//         connection.query("DELETE FROM burgers WHERE)
//     }
// }

module.exports = orm;