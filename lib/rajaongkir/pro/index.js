var request = require('request')
var Promise = require('promise')
var qs = require('querystring')

function Pro (apiKey) {
  this.version = 'pro'
  this.apiKey = apiKey
  this.httpUri = 'http://' + this.version + '.rajaongkir.com/api'
  this.couriers = {
    JNE: 'jne',
    TIKI: 'tiki',
    POS: 'pos',
    RPX: 'rpx',
    ESL: 'esl',
    PCP: 'pcp',
    PANDU: 'pandu',
    WAHANA: 'wahana',
    SICEPAT: 'sicepat',
    JNT: 'jnt',
    PAHALA: 'pahala',
    CAHAYA: 'cahaya',
    SAP: 'sap',
    JET: 'jet',
    INDAH: 'indah',
    DSE: 'dse',
    SLIS: 'slis',
    FIRST: 'first',
    NCS: 'ncs',
    STAR: 'star',
    EXPEDITO: 'expedito'
  }
}

module.exports = Pro

Pro.prototype.getProvinces = function () {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getProvince = function (id) {
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
      if (error) reject(error)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getCities = function () {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getCity = function (id) {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getSubDistrict = function (params) {
  var uri = this.httpUri + '/subdistrict?' + qs.stringify(params)
  var apiKey = this.apiKey
  return new Promise(function (resolve, reject) {
    request({
      uri: uri,
      method: 'GET',
      headers: {
        'key': apiKey,
        'Content-Type': 'application/json'
      }
    }, function (error, response, body) {
      if (error || typeof body === 'undefined') reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getCosts = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getJNECost = function (params) {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getTIKICost = function (params) {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getPOSCost = function (params) {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getRPXCost = function (params) {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getESLCost = function (params) {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getPCPCost = function (params) {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getPanduCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.PANDU
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getWahanaCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.WAHANA
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getSiCepatCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.SICEPAT
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getPahalaCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.PAHALA
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getCahayaCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.CAHAYA
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getSAPCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.SAP
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getJETCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.JET
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getIndahCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.INDAH
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getDSECost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.DSE
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getSLISCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.SLIS
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getFirstCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.FIRST
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getNCSCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.NCS
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getStarCost = function (params) {
  var uri = this.httpUri + '/cost'
  var apiKey = this.apiKey
  params.courier = this.couriers.STAR
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getInterOrigins = function () {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getInterOrigin = function (params) {
  var uri = this.httpUri + '/v2/internationalOrigin?' + qs.stringify(params)
  var apiKey = this.apiKey
  return new Promise(function (resolve, reject) {
    request({
      uri: uri,
      method: 'GET',
      headers: {
        'key': apiKey
      }
    }, function (error, response, body) {
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getInterDests = function () {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getInterDest = function (id) {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getTIKIInterConst = function (params) {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getPOSInterCost = function (params) {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getJNEInterCost = function (params) {
  var uri = this.httpUri + '/v2/internationalCost'
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getSLISInterCost = function (params) {
  var uri = this.httpUri + '/v2/internationalCost'
  var apiKey = this.apiKey
  params.courier = this.couriers.SLIS
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getExpeditoInterCost = function (params) {
  var uri = this.httpUri + '/v2/internationalCost'
  var apiKey = this.apiKey
  params.courier = this.couriers.EXPEDITO
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getCurrency = function () {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getJNEWaybill = function (params) {
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getPOSWaybill = function (params) {
  var uri = this.httpUri + '/waybill'
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getTIKIWaybill = function (params) {
  var uri = this.httpUri + '/waybill'
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getWahanaWaybill = function (params) {
  var uri = this.httpUri + '/waybill'
  var apiKey = this.apiKey
  params.courier = this.couriers.WAHANA
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getJNTWaybill = function (params) {
  var uri = this.httpUri + '/waybill'
  var apiKey = this.apiKey
  params.courier = this.couriers.JNT
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getRPXWaybill = function (params) {
  var uri = this.httpUri + '/waybill'
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getSAPWaybill = function (params) {
  var uri = this.httpUri + '/waybill'
  var apiKey = this.apiKey
  params.courier = this.couriers.SAP
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getSiCepatWaybill = function (params) {
  var uri = this.httpUri + '/waybill'
  var apiKey = this.apiKey
  params.courier = this.couriers.SICEPAT
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getPCPWaybill = function (params) {
  var uri = this.httpUri + '/waybill'
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getJETWaybill = function (params) {
  var uri = this.httpUri + '/waybill'
  var apiKey = this.apiKey
  params.courier = this.couriers.JET
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getDSEWaybill = function (params) {
  var uri = this.httpUri + '/waybill'
  var apiKey = this.apiKey
  params.courier = this.couriers.DSE
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}

Pro.prototype.getFirstWaybill = function (params) {
  var uri = this.httpUri + '/waybill'
  var apiKey = this.apiKey
  params.courier = this.couriers.FIRST
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
      if (error) reject(error)
      var result = JSON.parse(body)
      if (result.rajaongkir.status.code !== 200) reject(result)
      return resolve(result)
    })
  })
}
