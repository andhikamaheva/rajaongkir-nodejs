# RajaOngkir NodeJS


[![NPM Version][npm-image]][npm-url] [![NPM Downloads][downloads-image]][downloads-url] [![Linux Build][build-image]][build-url] [![Windows Build][appveyor-image]][appveyor-url] [![Coverage Status][coveralls-image]][coveralls-url]

RajaOngkir NodeJS merupakan NodeJS Package yang memudahkan pengembang perangkat lunak dalam mengkonsumsi API dari http://rajaongkir.com .

Silahkan baca dokumentasi di bawah ini untuk penggunaan lengkap dari RajaOngkir NodeJS.

# Daftar Isi

* [Instalasi](#installation)
* [Quick Start](#quick_start)
* [Penggunaan](#usage)
* [Contoh Kasus](#use_cases)
* [Announcements](#announcements)
* [Roadmap](#roadmap)
* [Cara Kontribusi](#contribute)
* [Troubleshooting](#troubleshooting)
* [Tentang](#about)
* [Lisensi](#license)

<a name="installation"></a>
# Instalasi

## Prasyarat
- Node.js versi 4, 6 atau 7
- RajaOngkir Service (telah mendaftar di RajaOngkir.com dengan paket Starter, Basic maupun Pro dan telah memiliki **API Key**)

## Cara Instal
Penggunaan Package RajaOngkir NodeJS membutuhkan [NPM](https://npmjs.org/). Jika Anda tidak familiar dengan NPM, Anda dapat membaca [NPM Docs](https://npmjs.org/doc/) terlebih dahulu.  If you are unfamiliar with npm, see the . NPM telah terinstal dengan NodeJS sejak node versi 0.8.x karena itu Anda mungkin sudah memilikinya.

```bash
npm install --save rajaongkir-nodejs
```

## Dependencies
Terdapat beberapa Dependency yang mendukung RajaOngkir NodeJS dapat berjalan, antara lain :

### Main Dependencies
* [fs](https://nodejs.org/api/fs.html)
* [http](https://www.npmjs.com/package/http)
* [request](https://github.com/request/request)
* [promise](https://github.com/then/promise)


### Development Dependencies
* [assert](https://github.com/defunctzombie/commonjs-assert)
* [chai](https://github.com/chaijs/chai)
* [coveralls](https://github.com/nickmerwin/node-coveralls)
* [istanbul](https://github.com/gotwarlost/istanbul)
* [mocha](https://github.com/mochajs/mocha)
* [mocha-lcov-reporter](https://github.com/StevenLooman/mocha-lcov-reporter)
* [nock](https://github.com/node-nock/nock)
* [vows](https://github.com/vowsjs/vows)

<a name="quick_start"></a>
# Quick Start

<a name="usage"></a>
# Penggunaan

<a name="use_cases"></a>
# Contoh Kasus

<a name="announcements"></a>
# Pengumuman
This Package still in development progress may having trouble or not fully cover all MailChimp API.

<a name="roadmap"></a>
# Roadmap

<a name="contribute"></a>
# Cara Kontribusi

<a name="troubleshooting"></a>
# Troubleshooting

<a name="about"></a>
# Tentang

<a name="license"></a>
# Lisensi

**MIT License**

Copyright (c) 2017 Andhika Maheva Wicaksono

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[build-image]: https://img.shields.io/travis/andhikamaheva/rajaongkir-nodejs/master.svg?label=linux
[build-url]: https://travis-ci.org/andhikamaheva/rajaongkir-nodejs
[npm-image]: https://badge.fury.io/js/rajaongkir-nodejs.svg
[npm-url]: https://badge.fury.io/js/rajaongkir-nodejs
[downloads-image]: https://img.shields.io/npm/dm/rajaongkir-nodejs.svg
[downloads-url]: https://npmjs.org/package/rajaongkir-nodejs
[appveyor-image]: https://img.shields.io/appveyor/ci/andhikamaheva/rajaongkir-nodejs/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/andhikamaheva/rajaongkir-nodejs
[coveralls-image]: https://coveralls.io/repos/github/andhikamaheva/rajaongkir-nodejs/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/andhikamaheva/rajaongkir-nodejs?branch=master