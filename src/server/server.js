/* Global Variables */
var path = require('path')
const dotenv = require('dotenv');
dotenv.config();

const express = require('express')
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

// export app help in testing server endpoints with Jest
module.exports = app

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: 'dist'});
})


app.post('/LocationInfo', getLocation)

async function getLocation(req, res) {

    const url = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=${process.env.API_GEO}`;
    const response = await fetch(url);

    try {
        const data = await response.json();
        let coordinates = {
            latit: data.geonames[0].latit,
            longit: data.geonames[0].longit
        };
        res.send(coordinates);
    } catch (error) {
        console.log("Error", error);
    }
}

app.post('/WeatherInfo', getWeather)

async function getWeather(req, res){

    const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.body.lat}&lon=${req.body.long}&key=${process.env.API_WTH}`;
    const response = await fetch(url)
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("Error", error);
    }
}

app.post('/Photo', getPhoto)

async function getPhoto(req, res){

    const url = `https://pixabay.com/api/?key=${process.env.API_PIX}&q=${req.body.city}&image_type=photo&orientation=vertical`;
    const response = await fetch(url)
    try {
        const data = await response.json();
        res.send(data);
    } catch(error) {
        console.log("Error", error);
    }
}

// route for testing server
app.get('/test', function (req, res) {
    res.send({message: "hello"})
})