




const cocktailDrink = require('../models/Cocktail.model');

const cocktailDeleteController = (req, res) => {
    const { drink_idx } = req.params.idDrink;
    cocktailDrink.remove({ idDrink: idDrink }, (req, res) => {
        cocktailDrink.find({}, (error, data) => {
            res.send(data);
        // cocktailDrink.find({}, (error, data) => {
        //     if(error){
        //         res.send(error.message)
        //     } else {
        //         res.send(data);
        //     }
        // })
        // 
        })
    })
}

module.exports = cocktailDeleteController;


