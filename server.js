const express = require('express') // require the express package
const app = express() // initialize your express app instance
require('dotenv').config();

const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT;
const cocktailController = require('./controllers/Cocktail.controller');
const cocktailPostController = require('./controllers/Cocktail.post.controller');
const cocktailGetController = require('./controllers/Cocktail.get.controller');
const cocktailDeleteController = require('./controllers/Cocktail.delete.controller');
const cocktailUpdateController = require('./controllers/Cocktail.update.controller');




// connect to mongoose
mongoose.connect('mongodb://localhost:27017/Cocktail',  
    { useNewUrlParser: true, useUnifiedTopology: true }
);


app.use(cors()) // after you initialize your express app instance
app.use(express.json());
// a server endpoint 
app.get('/', (req, res) => { 
    res.send('Hello World') 
})

app.get('/cocktail', cocktailController);

app.post('/cocktailDB', cocktailPostController);
app.get('/cocktailDB', cocktailGetController);
// app.put('/cocktailDB/:idDrink', cocktailUpdateController);
app.delete('/cocktailDB/:drink_idx', cocktailDeleteController);



app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
}) // kick start the express server to work