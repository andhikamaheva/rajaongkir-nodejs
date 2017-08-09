var Starter = require('./starter'),
  Basic = require('./basic'),
  Pro = require('./pro'),
  fs = require('fs')

module.exports = {
  Starter: function (apiKey) {
    if (!apiKey) throw new Error('You must provide RajaOngkir API key')
    return new Starter(apiKey)
  },
  Basic: function (apiKey) {
    if (!apiKey) throw new Error('You must provide RajaOngkir API key')
    return new Basic(apiKey)
  },
  Pro: function (apiKey) {
    if (!apiKey) throw new Error('You must provide RajaOngkir API key')
    return new Pro(apiKey)
  }

}
