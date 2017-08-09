var http = require('http')
var request = require('request')
var Promise = require('promise')

function Starter (apiKey) {
  this.version = 'starter'
  this.apiKey = apiKey
  this.httpUri = 'http://api.rajaongkir.com/' + this.version
  this.couriers = {
    JNE: 'jne',
    TIKI: 'tiki',
    POS: 'pos'
  }
}

module.exports = Starter

Starter.prototype.getProvinces = function () {
  var uri = this.httpUri + '/province'
  var apiKey = this.apiKey
  return new Promise(function (resolve, reject) {
    request({
      uri: uri,
      method: 'GET',
      headers: {
        'key': apiKey
      }
    }, function (error, response, body) {
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      resolve(result)
    })
  })
}

Starter.prototype.getProvince = function (id) {
  var uri = this.httpUri + '/province?id=' + id
  var apiKey = this.apiKey
  return new Promise(function (resolve, reject) {
    request({
      uri: uri,
      method: 'GET',
      headers: {
        'key': apiKey
      }
    }, function (error, response, body) {
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)

      resolve(result)
    })
  })
}

Starter.prototype.getCities = function () {
  var uri = this.httpUri + '/city'
  var apiKey = this.apiKey
  return new Promise(function (resolve, reject) {
    request({
      uri: uri,
      method: 'GET',
      headers: {
        'key': apiKey
      }
    }, function (error, response, body) {
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)

      resolve(result)
    })
  })
}

Starter.prototype.getCity = function (id) {
  var uri = this.httpUri + '/city?id=' + id
  var apiKey = this.apiKey
  return new Promise(function (resolve, reject) {
    request({
      uri: uri,
      method: 'GET',
      headers: {
        'key': apiKey
      }
    }, function (error, response, body) {
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)

      resolve(result)
    })
  })
}

Starter.prototype.getJNECost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.JNE
  return new Promise(function (resolve, reject) {
    request({
      uri: uri,
      method: 'POST',
      headers: {
        'key': apiKey,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: params
    }, function (error, response, body) {
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)

      resolve(result)
    })
  })
}
Starter.prototype.getTIKICost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.TIKI
  return new Promise(function (resolve, reject) {
    request({
      uri: uri,
      method: 'POST',
      headers: {
        'key': apiKey,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: params
    }, function (error, response, body) {
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)

      resolve(result)
    })
  })
}
Starter.prototype.getPOSCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.POS
  return new Promise(function (resolve, reject) {
    request({
      uri: uri,
      method: 'POST',
      headers: {
        'key': apiKey,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: params
    }, function (error, response, body) {
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)

      resolve(result)
    })
  })
}
