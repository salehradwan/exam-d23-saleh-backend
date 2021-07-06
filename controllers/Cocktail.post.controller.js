
const cocktailDrink = require('../models/Cocktail.model');

const cocktailPostController = (req, res) => {
    const {
        idDrink,
        strDrink,
        strDrinkThumb
    } = req.body;
    // res.send({idDrink: idDrink, strDrink: strDrink , strDrinkThumb: strDrinkThumb});
    const newCocktailDrink = new cocktailDrink({
        idDrink,
        strDrink,
        strDrinkThumb
    });
    newCocktailDrink.save().then((data)=>{
        res.send(data)
      })
}
module.exports = cocktailPostController;