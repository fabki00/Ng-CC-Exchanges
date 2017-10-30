/*jshint esversion: 6 */
const _express = require('express');
const _app = _express();
const _bodyParser = require('body-parser');
const _api = _express.Router();
const _port = 4201;
const _Client = require('node-rest-client').Client;
const _client = new _Client();
/*------------------------------------------------------------ */
_app.use(_bodyParser.json());
_app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', request.headers.origin);
    response.header('Access-Control-Allow-Methods', 'GET');
    next();
});
_app.use('/api', _api);
/*----------------------- Base Url ----------------------------*/
const _BITTREX_BASEURL = '/bittrex';
const _POLONIEX_BASEURL = '/poloniex';
/*-------------------------- Api ----------------------------- */
_api.get(_BITTREX_BASEURL + '/getmarkets', (request, response) => {
    console.time("getmarkets");
    const url = 'https://bittrex.com/api/v1.1/public/getmarkets';
    httpGet(url, response);
    console.timeEnd("getmarkets");
});
_api.get(_BITTREX_BASEURL + '/getmarketsummaries', (request, response) => {
    console.time("getmarketsummaries");
    const url = 'https://bittrex.com/api/v1.1/public/getmarketsummaries';
    httpGet(url, response);
    console.timeEnd("getmarketsummaries");
});

_api.get(_BITTREX_BASEURL + '/getcurrencies', (request, response) => {
    console.time("getcurrencies");
    const url = 'https://bittrex.com/api/v1.1/public/getcurrencies';
    httpGet(url, response);
    console.timeEnd("getcurrencies");
});
_api.get(_BITTREX_BASEURL + '/getorderbook', (request, response) => {
    console.time("getorderbook");
    const market = request.query.market;
    const type = request.query.type;
    const depth = request.query.depth;
    const url = `https://bittrex.com/api/v1.1/public/getorderbook?market=${market}&type=${type}&depth${depth}`;
    httpGet(url, response);
    console.timeEnd("getorderbook");
});
_api.get(_BITTREX_BASEURL + '/getticker', (request, response) => {
    console.time("getticker");
    const market = request.query.market;
    const url = `https://bittrex.com/api/v1.1/public/getticker?market=${market}`;
    httpGet(url, response);
    console.timeEnd("getticker");
});
_api.get(_BITTREX_BASEURL + '/getmarketsummary', (request, response) => {
    console.time("getmarketsummary");
    const market = request.query.market;
    const url = `https://bittrex.com/api/v1.1/public/getmarketsummary?market=${market}`;
    httpGet(url, response);
    console.timeEnd("getmarketsummary");
});
/*-------------------------- Run ----------------------------- */
_app.listen(_port, () => {
    console.time("start");
    console.log(`Api listening on port ${_port}`);
    console.timeEnd("start");
});

function httpGet(url, response) {
    _client.get(url, (data, resp) => {
        response.json(data);
    });
}