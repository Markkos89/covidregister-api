const express = require('express');
const app = express();
require('dotenv').config()
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = 3000;

// REQUIRE MIDDLEWARE
const instantMongoCrud = require('express-mongo-crud'); // require the module

// mongoose.connect(process.env.DB_HOST, { useMongoClient: true });
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://marcos:covidregister@cluster0.owed7.mongodb.net/covidregister?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  if(err) console.log(err)
  console.log("Connected to MongoDB")
});

const options = { //specify options
    host: `localhost:${process.env.PORT}`
}

//USE AS MIDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.json()); // add body parser
app.use(instantMongoCrud(options)); // use as middleware

//HEALTHCHECK
router.get('/', (req, res) => {
    res.send('works well');
});

app.use(router);

app.listen(process.env.PORT, () => {
    console.log('*****************************************************');
    console.log('API started at http://localhost:'+process.env.PORT);
    console.log('Swagger UI availaible at http://localhost:3000/apidoc');
    console.log('*****************************************************');
});