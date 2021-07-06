const axios = require('axios');

// https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
const cocktailController = (req, res) => {
    
    const cocktailApiUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
    axios.get(cocktailApiUrl).then(response => res.send(response.data)).catch(error => res.send(error.message));

}
module.exports = cocktailController;