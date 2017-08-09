var http = require('http')
var request = require('request')
var Promise = require('promise')

function Basic (apiKey) {
  this.version = 'basic'
  this.apiKey = apiKey
  this.httpUri = 'http://api.rajaongkir.com/' + this.version
  this.couriers = {
    JNE: 'jne',
    TIKI: 'tiki',
    POS: 'pos',
    RPX: 'rpx',
    ESL: 'esl',
    PCP: 'pcp'
  }
}

module.exports = Basic

Basic.prototype.getProvinces = function () {
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

Basic.prototype.getProvince = function (id) {
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

Basic.prototype.getCities = function () {
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

Basic.prototype.getCity = function (id) {
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

Basic.prototype.getJNECost = function (params) {
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

Basic.prototype.getTIKICost = function (params) {
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

Basic.prototype.getPOSCost = function (params) {
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

Basic.prototype.getRPXCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.RPX
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

Basic.prototype.getESLCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.ESL
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

Basic.prototype.getPCPCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.PCP
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

Basic.prototype.getInterOrigins = function () {
  var uri = this.httpUri + '/v2/internationalOrigin'
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

Basic.prototype.getInterOrigin = function (id) {
  var uri = this.httpUri + '/v2/internationalOrigin?id=' + id
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

Basic.prototype.getInterDests = function () {
  var uri = this.httpUri + '/v2/internationalDestination'
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

Basic.prototype.getInterDest = function (id) {
  var uri = this.httpUri + '/v2/internationalDestination?id=' + id
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

Basic.prototype.getTIKIInterConst = function (params) {
  var uri = this.httpUri + '/v2/internationalCost'
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

Basic.prototype.getPOSInterCost = function (params) {
  var uri = this.httpUri + '/v2/internationalCost'
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

Basic.prototype.getCurrency = function () {
  var uri = this.httpUri + '/currency'
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

Basic.prototype.getJNEWaybill = function (params) {
  var uri = this.httpUri + '/waybill'
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
