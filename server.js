var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var PORT = 3000;

// REQUIRE MIDDLEWARE
var instantMongoCrud = require('express-mongo-crud'); // require the module

mongoose.connect('mongodb://database:27017/mongocrud', {useMongoClient: true});

var options = { //specify options
    host: `localhost:${PORT}`
}

//USE AS MIDDLEWARE
app.use(bodyParser.json()); // add body parser
app.use(instantMongoCrud(options)); // use as middleware

//HEALTHCHECK
router.get('/', (req, res) => {
    res.send('works well');
});

app.use(router);

app.listen(PORT, () => {
    console.log('API started at http://localhost:'+PORT);
});