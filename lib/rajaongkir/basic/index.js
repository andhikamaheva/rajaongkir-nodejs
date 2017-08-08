var http = require('http');
var request = require('request');
var Promise = require('promise');

function Basic(apiKey) {
    this.version = 'basic';
    this.apiKey = apiKey;
    this.httpUri = 'http://api.rajaongkir.com/' + this.version;
}

module.exports = Basic;
