var http = require('http');
var request = require('request');
var Promise = require('promise');

function Pro(apiKey) {
    this.version = 'pro';
    this.apiKey = apiKey;
    this.httpUri = 'http://api.rajaongkir.com/' + this.version;
}

module.exports = Pro;
