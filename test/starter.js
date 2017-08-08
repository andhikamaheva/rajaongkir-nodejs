var assert = require('assert'),
    vows = require('vows'),
    chai = require('chai'),
    nock = require('nock');

const apiKey = 'b8f97a650a5165b9353f6a29551a6525';
var assert = chai.assert;
var expect = chai.expect;
chai.should();


describe('RajaOngkir Starter Package Test', function () {
    describe('Checking API Key', function () {
        if (apiKey !== '') {
            describe('API Key exist', function () {
                it('Should Return API Key', function () {

                });
                var RajaOngkir = require('../index').Starter(apiKey);

                describe('Get All Provinces', function () {
                    it('Should Return All Provinces', function () {
                        return RajaOngkir.getProvinces().then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get Specific Province by ID', function () {
                    it('Should Return Specific Province', function () {
                        var id = 1;
                        return RajaOngkir.getProvince(id).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get All Cities', function () {
                    it('Should Return All Cities', function () {
                        return RajaOngkir.getCities().then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get Specific City by ID', function () {
                    it('Should Return Specific City', function () {
                        var id = 1;
                        return RajaOngkir.getCity(id).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get JNE Shipping Cost', function () {
                    it('Should Return JNE Shipping Cost', function () {
                        var params = {
                            origin: 501,
                            destination: 114,
                            weight: 1700
                        };
                        return RajaOngkir.getJNECost(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get TIKI Shipping Cost', function () {
                    it('Should Return TIKI Shipping Cost', function () {
                        var params = {
                            origin: 501,
                            destination: 114,
                            weight: 1700
                        };
                        return RajaOngkir.getTikiCost(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get POS Shipping Cost', function () {
                    it('Should Return POS Shipping Cost', function () {
                        var params = {
                            origin: 501,
                            destination: 114,
                            weight: 1700
                        };
                        return RajaOngkir.getPosCost(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

            });
        } else {
            describe('API Key doesn\'t exist', function () {
                it('Should Return error', function () {

                });
            })
        }
    });

});

