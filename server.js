const express = require('express') // require the express package
const app = express() // initialize your express app instance
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT;

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/Koktil',  
    { useNewUrlParser: true, useUnifiedTopology: true }
);


app.use(cors()) // after you initialize your express app instance
app.use(express.json());
// a server endpoint 
app.get('/', (req, res) => { // callback function of what we should do with our request
    res.send('Hello World') // our endpoint function response
})


app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
}) // kick start the express server to work