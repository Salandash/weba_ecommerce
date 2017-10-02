'use strict'

const http = require('http');
const express = require('express');
const fs = require('fs');
mongoose = require('mongoose'),
Item = require('./api/models/itemListModel'),
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Itemdb');

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const configJson = fs.readFileSync('./config.json', 'utf8', function(err, data)
{
    const config = JSON.parse(configJson);

    const app = express();
    var routes = require('./api/routes/itemListRoutes'); //importing route
    routes(app); //register the route

    app.use(express.static(config.webserver.folder));

    const httpServer = http.createServer(app);

    httpServer.listen(config.webserver.port, function(err){

        if(err)
            {
                console.log(err.message);
                return;
            }

    console.log(`WebAdv ECommerce Server listening on port ${config.webserver.port}`);

});

console.log('Reading config file');
});
