const express = require("express");
const router = express.Router();
const Burgers = require("../models/burger");

router.get('/', (req, res) => {
    Burgers.all(function(data){
        let foundBurgers = {
            burgers: data
        }
        res.render('index', foundBurgers);
    });
    
});

module.exports = router;