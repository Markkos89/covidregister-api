const express = require('express');
const app = express();
require('dotenv').config()
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 3000;

// REQUIRE MIDDLEWARE
const instantMongoCrud = require('express-mongo-crud'); // require the module

mongoose.connect(process.env.DB_HOST, { useMongoClient: true });

const options = { //specify options
    host: `localhost:${process.env.PORT}`
}

//USE AS MIDDLEWARE
app.use(bodyParser.json()); // add body parser
app.use(instantMongoCrud(options)); // use as middleware

//HEALTHCHECK
router.get('/', (req, res) => {
    res.send('works well');
});

app.use(router);

app.listen(process.env.PORT, () => {
    console.log('API started at http://localhost:'+process.env.PORT);
});