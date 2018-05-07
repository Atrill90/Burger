var orm = require("../config/orm.js");


const burger = {
    all: function(cb) {
      orm.all(function(res) {
        cb(res);
      });
    },
    create: function(value, cb){
        orm.create(value,function(res){
        cb(res);
        });
    },
    delete: function(id,cb){
        orm.delete(id, function(res){
            cb(res);
        });
    },
    update: function(id,cb){
        orm.update(id, function(res){
            cb(res);
        });
    }
}

module.exports = burger;