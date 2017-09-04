/*jshint esversion: 6 */
const _express = require('express');
const _app = _express();
const _bodyParser = require('body-parser');
const _api = _express.Router();
const _port = 4201;

const _BITTREX_BASEURL = '/bittrex';

_app.use(_bodyParser.json());
_app.use((request, response, next) => {
    // TODO : remove
    response.header('Access-Control-Allow-Origin', '*');
    next();
});


_api.get(_BITTREX_BASEURL, (request, response) => {
    console.log('bittrex path');
});

_app.use('/api', _api);

_app.listen(_port, () => {
    console.time("start");
    console.log(`Api listening on port ${_port}`);
    console.timeEnd("start");
});