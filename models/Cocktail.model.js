const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cocktailSchema = new Schema({

    idDrink: {
        type: String,
        required: true,
        unique: true
    },
    strDrink: {
        type: String
    },
    strDrinkThumb: {
        type: String
    }
});

const cocktailModel = mongoose.model('Cocktail', cocktailSchema);

module.exports = cocktailModel;