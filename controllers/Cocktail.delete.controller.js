
const cocktailDrink = require('../models/Cocktail.model');

const cocktailDeleteController = (req, res) => {
    const { idDrink } = req.params;

    cocktailDrink.remove({idDrink: idDrink}, (error, data)=> {
        cocktailDrink.find({}, (error, data) => {
                    if(error){
                        res.send(error.message)
                    } else {
                        res.send(data);
                    }
                })
    })

//     cocktailDrink.find({}, (error, data) => {
//         if(error){
//             res.send(error.message)
//         } else {
//             res.send(data);
//         }
//     })
}
module.exports = cocktailDeleteController;
