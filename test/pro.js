var chai = require('chai')
const apiKey = process.env.API_KEY
chai.should()

describe('RajaOngkir Pro Package Test', function () {
  describe('Checking API Key', function () {
    if (apiKey !== '') {
      describe('API Key exist', function () {
        it('Should Return API Key', function () {

        })
        var RajaOngkir = require('../index').Pro(apiKey)

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

        describe('Get Specific Subdistrict by ID', function () {
          it('Should Return Specific Subdistrict', function () {
            var params = {
              city: 1,
              id: 1
            }
            return RajaOngkir.getSubDistrict(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get All Shipping Costs', function () {
          it('Should Return Shipping Costs With Chosen Couriers', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: '',
              courier: 'jne:pos:tiki'
            }
            return RajaOngkir.getCosts(params).then(function (result) {
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
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
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
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
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
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
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
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
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
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
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
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getPCPCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get PANDU Shipping Cost', function () {
          it('Should Return PANDU Shipping Cost', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getPanduCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get Wahana Shipping Cost', function () {
          it('Should Return Wahana Shipping Cost', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getWahanaCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get SI CEPAT Shipping Cost', function () {
          it('Should Return SI CEPAT Shipping Cost', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getSiCepatCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get PAHALA Shipping Cost', function () {
          it('Should Return PAHALA Shipping Cost', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getPahalaCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get CAHAYA Shipping Cost', function () {
          it('Should Return CAHAYA Shipping Cost', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getCahayaCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get SAP Shipping Cost', function () {
          it('Should Return SAP Shipping Cost', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getSAPCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get JET Shipping Cost', function () {
          it('Should Return JET Shipping Cost', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getJETCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get INDAH Shipping Cost', function () {
          it('Should Return INDAH Shipping Cost', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getIndahCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get DSE Shipping Cost', function () {
          it('Should Return DSE Shipping Cost', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getDSECost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get SLI Shipping Cost', function () {
          it('Should Return SLI Shipping Cost', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getSLISCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get FIRST Shipping Cost', function () {
          it('Should Return FIRST Shipping Cost', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getFirstCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get NCS Shipping Cost', function () {
          it('Should Return NCS Shipping Cost', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getNCSCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get STAR Shipping Cost', function () {
          it('Should Return STAR Shipping Cost', function () {
            var params = {
              origin: 501,
              originType: 'city',
              destination: 114,
              destinationType: 'city',
              weight: 1700,
              length: '',
              width: '',
              height: '',
              diameter: ''
            }
            return RajaOngkir.getStarCost(params).then(function (result) {
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
            var params = {
              id: 152,
              province: 6
            }
            return RajaOngkir.getInterOrigin(params).then(function (result) {
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

        describe('Get TIKI International Shipping Cost', function () {
          it('Should Return TIKI International Shipping Cost', function () {
            var params = {
              origin: 152,
              destination: 108,
              weight: 1400,
              length: '',
              width: '',
              height: ''
            }
            return RajaOngkir.getTIKIInterConst(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get POS International Shipping Cost', function () {
          it('Should Return POS International Shipping Cost', function () {
            var params = {
              origin: 152,
              destination: 108,
              weight: 1400,
              length: '',
              width: '',
              height: ''
            }
            return RajaOngkir.getPOSInterCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get JNE International Shipping Cost', function () {
          it('Should Return JNE International Shipping Cost', function () {
            var params = {
              origin: 152,
              destination: 108,
              weight: 1400,
              length: '',
              width: '',
              height: ''
            }
            return RajaOngkir.getJNEInterCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get SLIS International Shipping Cost', function () {
          it('Should Return SLIS International Shipping Cost', function () {
            var params = {
              origin: 152,
              destination: 108,
              weight: 1400,
              length: '',
              width: '',
              height: ''
            }
            return RajaOngkir.getSLISInterCost(params).then(function (result) {
              result.should.have.property('rajaongkir')
              result.rajaongkir.status.code.should.deep.equal(200)
              result.rajaongkir.status.description.should.deep.equal('OK')
            })
          })
        })

        describe('Get EXPEDITO International Shipping Cost', function () {
          it('Should Return EXPEDITO International Shipping Cost', function () {
            var params = {
              origin: 152,
              destination: 108,
              weight: 1400,
              length: '',
              width: '',
              height: ''
            }
            return RajaOngkir.getExpeditoInterCost(params).then(function (result) {
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

        /* describe('Get POS Waybill', function () {
                    it('Should Return POS Waybill', function () {
                        var params = {waybill: 'SOCAG00183235715'};
                        return RajaOngkir.getPOSWaybill(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get TIKI Waybill', function () {
                    it('Should Return TIKI Waybill', function () {
                        var params = {waybill: 'SOCAG00183235715'};
                        return RajaOngkir.getTIKIWaybill(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get WAHANA Waybill', function () {
                    it('Should Return WAHANA Waybill', function () {
                        var params = {waybill: 'SOCAG00183235715'};
                        return RajaOngkir.getWahanaWaybill(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get JNT Waybill', function () {
                    it('Should Return JNT Waybill', function () {
                        var params = {waybill: 'SOCAG00183235715'};
                        return RajaOngkir.getJNTWaybill(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get RPX Waybill', function () {
                    it('Should Return RPX Waybill', function () {
                        var params = {waybill: 'SOCAG00183235715'};
                        return RajaOngkir.getRPXWaybill(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get SAP Waybill', function () {
                    it('Should Return SAP Waybill', function () {
                        var params = {waybill: 'SOCAG00183235715'};
                        return RajaOngkir.getSAPWaybill(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get SI CEPAT Waybill', function () {
                    it('Should Return SI CEPAT Waybill', function () {
                        var params = {waybill: 'SOCAG00183235715'};
                        return RajaOngkir.getSiCepatWaybill(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get PCP Waybill', function () {
                    it('Should Return PCP Waybill', function () {
                        var params = {waybill: 'SOCAG00183235715'};
                        return RajaOngkir.getPCPWaybill(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get JET Waybill', function () {
                    it('Should Return JET Waybill', function () {
                        var params = {waybill: 'SOCAG00183235715'};
                        return RajaOngkir.getJETWaybill(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get DSE Waybill', function () {
                    it('Should Return DSE Waybill', function () {
                        var params = {waybill: 'SOCAG00183235715'};
                        return RajaOngkir.getDSEWaybill(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                });

                describe('Get FIRST Waybill', function () {
                    it('Should Return FIRST Waybill', function () {
                        var params = {waybill: 'SOCAG00183235715'};
                        return RajaOngkir.getFirstWaybill(params).then(function (result) {
                            result.should.have.property('rajaongkir');
                            result.rajaongkir.status.code.should.deep.equal(200);
                            result.rajaongkir.status.description.should.deep.equal("OK");
                        });
                    });
                }); */
      })
    } else {
      describe('API Key doesn\'t exist', function () {
        it('Should Return error', function () {

        })
      })
    }
  })
})
