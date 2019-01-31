var assert = require('assert')

var vows = require('vows')

var chai = require('chai')

var nock = require('nock')

const apiKey = process.env.API_KEY
var assert = chai.assert
var expect = chai.expect
chai.should()

describe('RajaOngkir Basic Package Test', function () {
  describe('Checking API Key', function () {
    if (apiKey !== '') {
      describe('API Key exist', function () {
        it('Should Return API Key', function () {

        })
        var RajaOngkir = require('../index').Basic(apiKey)

        describe('Get All Provinces', function () {
          it('Should Return All Provinces', function () {
            return RajaOngkir.getProvinces().then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get Specific Province by ID', function () {
          it('Should Return Specific Province', function () {
            var id = 1
            return RajaOngkir.getProvince(id).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get All Cities', function () {
          it('Should Return All Cities', function () {
            return RajaOngkir.getCities().then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get Specific City by ID', function () {
          it('Should Return Specific City', function () {
            var id = 1
            return RajaOngkir.getCity(id).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get JNE Shipping Cost', function () {
          it('Should Return JNE Shipping Cost', function () {
            var params = {
              origin: 501,
              destination: 114,
              weight: 1700
            }
            return RajaOngkir.getJNECost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get TIKI Shipping Cost', function () {
          it('Should Return TIKI Shipping Cost', function () {
            var params = {
              origin: 501,
              destination: 114,
              weight: 1700
            }
            return RajaOngkir.getTIKICost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get POS Shipping Cost', function () {
          it('Should Return POS Shipping Cost', function () {
            var params = {
              origin: 501,
              destination: 114,
              weight: 1700
            }
            return RajaOngkir.getPOSCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get RPX Shipping Cost', function () {
          it('Should Return RPX Shipping Cost', function () {
            var params = {
              origin: 501,
              destination: 114,
              weight: 1700
            }
            return RajaOngkir.getRPXCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get ESL Shipping Cost', function () {
          it('Should Return ESL Shipping Cost', function () {
            var params = {
              origin: 501,
              destination: 114,
              weight: 1700
            }
            return RajaOngkir.getESLCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get PCP Shipping Cost', function () {
          it('Should Return PCP Shipping Cost', function () {
            var params = {
              origin: 501,
              destination: 114,
              weight: 1700
            }
            return RajaOngkir.getPCPCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get International Origins', function () {
          it('Should Return All International Origins', function () {
            return RajaOngkir.getInterOrigins().then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get Specific International Origin', function () {
          it('Should Return Specific International Origin', function () {
            var id = 1
            return RajaOngkir.getInterOrigin(id).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get International Destinations', function () {
          it('Should Return All International Destinations', function () {
            return RajaOngkir.getInterDests().then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get Specific International Destination', function () {
          it('Should Return Specific International Destination', function () {
            var id = 1
            return RajaOngkir.getInterDest(id).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        /*  describe('Get TIKI International Shipping Cost', function () {
                      it('Should Return TIKI International Shipping Cost', function () {
                          var params = {
                              origin: 152,
                              destination: 108,
                              weight: 1400
                          };
                          return RajaOngkir.getTIKIInterConst(params).then(function (result) {
                              result.should.have.property('rajaongkir');
                              result.rajaongkir.status.code.should.deep.equal(200);
                              result.rajaongkir.status.description.should.deep.equal("OK");
                          });
                      });
                  }); */

        describe('Get POS International Shipping Cost', function () {
          it('Should Return POS International Shipping Cost', function () {
            var params = {
              origin: 152,
              destination: 108,
              weight: 1400
            }
            return RajaOngkir.getPOSInterCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get Currency', function () {
          it('Should Return Currency', function () {
            return RajaOngkir.getCurrency().then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get JNE Waybill', function () {
          it('Should Return JNE Waybill', function () {
            var params = { waybill: 'SOCAG00183235715' }
            return RajaOngkir.getJNEWaybill(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })
      })
    } else {
      describe('API Key doesn\'t exist', function () {
        it('Should Return error', function () {

        })
      })
    }
  })
})
