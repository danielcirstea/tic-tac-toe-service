require('dotenv').config();

const express = require('express');
const app = express();
const http = require('http');
const config = require('./lib/common/config')();
const api = require('./lib');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const info = require('./package.json');
const cors = require('cors');

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if (config.db.mongo.uri) {
    app.use('/api', api);
}

app.use('*', (req, res) => {
    res.status(200).json({name: info.name, version: info.version, status: 'online'});
});

http.createServer(app).listen(config.app.port, () => {
    console.log(`Listening on ${config.app.port}.`);
});