"use strict";

let express = require('express'),
    bodyParser = require('body-parser'),
    house = require('./modules/house'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.urlencoded({extended: true}));

app.post('/house', house.handle);

app.listen(app.get('port'), () => console.log('Express server listening on port ' + app.get('port')));