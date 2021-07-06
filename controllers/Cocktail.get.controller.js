const cocktailDrink = require('../models/Cocktail.model');

const cocktailGetController = (req, res) => {
    cocktailDrink.find({}, (error, data) => {
        if(error){
            res.send(error.message)
        } else {
            res.send(data);
        }
    })
}
module.exports = cocktailGetController;