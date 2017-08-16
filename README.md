# RajaOngkir Node.js

[![NPM Version][npm-image]][npm-url] [![NPM Downloads][downloads-image]][downloads-url] [![Linux Build][build-image]][build-url] [![Windows Build][appveyor-image]][appveyor-url] [![Coverage Status][coveralls-image]][coveralls-url] [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

RajaOngkir Node.js merupakan Node.js Package yang memudahkan pengembang perangkat lunak dalam mengkonsumsi API dari http://rajaongkir.com .

Silahkan baca dokumentasi di bawah ini untuk penggunaan lengkap dari RajaOngkir Node.js.

# Daftar Isi

* [Dokumentasi](#documentation)
* [Instalasi](#installation)
* [Quick Start](#quick_start)
* [Penggunaan](#usage)
* [Pengumuman](#announcements)
* [Cara Kontribusi](#contribute)
* [Tentang](#about)
* [Lisensi](#license)

<a name="documentation"></a>
# Dokumentasi
Silahkan buka halaman [Wiki](https://github.com/andhikamaheva/rajaongkir-nodejs/wiki) untuk dokumentasi penggunaan lengkap dari RajaOngkir Node.js


<a name="installation"></a>
# Instalasi

## Prasyarat
- Node.js versi 4, 6 atau 7
- RajaOngkir Service (telah mendaftar di RajaOngkir.com dengan akun tipe Starter, Basic maupun Pro dan telah memiliki **API Key**)

## Cara Install
Penggunaan Package RajaOngkir Node.js membutuhkan [NPM](https://npmjs.org/). Jika Anda tidak familiar dengan NPM, Anda dapat membaca [NPM Docs](https://npmjs.org/doc/) terlebih dahulu.
Pada dasarnya NPM telah terinstal dengan Node.js sejak node versi 0.8.x karena itu Anda mungkin sudah memilikinya.

Jalankan perintah di bawah ini pada terminal Anda untuk menginstall <code>rajaongkir-nodejs</code> dan menyimpannya di file <code>package.json</code> .
```bash
npm install --save rajaongkir-nodejs
```

## Dependencies
Terdapat beberapa Dependency yang mendukung RajaOngkir Node.js dapat berjalan, antara lain :

### Main Dependencies
* [fs](https://nodejs.org/api/fs.html)
* [http](https://www.npmjs.com/package/http)
* [request](https://github.com/request/request)
* [promise](https://github.com/then/promise)
* [querystring](https://github.com/Gozala/querystring)


### Development Dependencies
* [assert](https://github.com/defunctzombie/commonjs-assert)
* [chai](https://github.com/chaijs/chai)
* [coveralls](https://github.com/nickmerwin/node-coveralls)
* [istanbul](https://github.com/gotwarlost/istanbul)
* [mocha](https://github.com/mochajs/mocha)
* [mocha-lcov-reporter](https://github.com/StevenLooman/mocha-lcov-reporter)
* [nock](https://github.com/node-nock/nock)
* [vows](https://github.com/vowsjs/vows)
* [standard](https://github.com/standard/standard)

<a name="quick_start"></a>
# Quick Start

### Menampilkan Seluruh Provinsi (Starter)
```javascript
var RajaOngkir = require('rajaongkir-nodejs').Starter('apiKey');

RajaOngkir.getProvinces().then(function (result){
    // Aksi ketika data Provinsi berhasil ditampilkan
}).catch(function (error){
    // Aksi ketika error terjadi
});
```

### Menampilkan Spesifik Provinsi (Starter)
```javascript
var RajaOngkir = require('rajaongkir-nodejs').Starter('apiKey');

var id = 1; // ID Provinsi
RajaOngkir.getProvince(id).then(function (result){
    // Aksi ketika data Provinsi berhasil ditampilkan
}).catch(function (error){
    // Aksi ketika error terjadi
});
```
### Menampilkan Seluruh Kota (Starter)
```javascript
var RajaOngkir = require('rajaongkir-nodejs').Starter('apiKey');

RajaOngkir.getCities().then(function (result){
    // Aksi ketika data Kota berhasil ditampilkan
}).catch(function (error){
    // Aksi ketika error terjadi
});
```

### Menghitung Biaya Kirim JNE (Starter)
```javascript
var RajaOngkir = require('rajaongkir-nodejs').Starter('apiKey');

var params = {
    origin: 501, // ID Kota atau Kabupaten Asal
    destination: 114, // ID Kota atau Kabupaten Tujuan
    weight: 1700 // Berat Barang dalam gram (gr)
};
RajaOngkir.getJNECost(params).then(function (result){
    // Aksi ketika data Biaya berhasil ditampilkan
}).catch(function (error){
    // Aksi ketika error terjadi
});
```

<a name="usage"></a>
# Penggunaan
Dalam RajaOngkir Node.js terdapat 3 jenis API yang dapat digunakan yaitu **Starter, Basic, dan Pro** sesuai dengan [dokumentasi](http://rajaongkir.com/dokumentasi) RajaOngkir.com.
Untuk menjalankan masing - masing API tersebut Anda dapat menggunakan perintah sebagai berikut : 

### Starter
```javascript
var RajaOngkir = require('rajaongkir-nodejs').Starter('apiKey');
```
Tipe akun **Starter** memiliki beberapa fitur antara lain : 
* <code>getProvinces()</code> untuk menampilkan seluruh data Provinsi 
* <code>getProvince(idProvinsi)</code> untuk menampilkan data Provinsi berdasarkan ID / parameter ID
* <code>getCities()</code> untuk menampilkan seluruh data Kota
* <code>getCity(idKota)</code> untuk menampilkan data Kota berdasarkan ID / Parameter ID
* <code>getJNECost(params)</code> untuk menampilkan biaya pengiriman Kurir JNE
* <code>getPOSCost(params)</code> untuk menampilkan biaya pengiriman Kurir POS
* <code>getTIKICost(params)</code> untuk menampilkan biaya pengiriman Kurir TIKI


### Basic
```javascript
var RajaOngkir = require('rajaongkir-nodejs').Basic('apiKey');
```
Tipe akun **Basic** memiliki beberapa fitur antara lain :
* <code>getProvinces()</code> untuk menampilkan seluruh data Provinsi 
* <code>getProvince(idProvinsi)</code> untuk menampilkan data Provinsi berdasarkan ID / parameter ID
* <code>getCities()</code> untuk menampilkan seluruh data Kota
* <code>getCity(idKota)</code> untuk menampilkan data Kota berdasarkan ID / Parameter ID
* <code>getJNECost(params)</code> untuk menampilkan biaya pengiriman Kurir JNE
* <code>getPOSCost(params)</code> untuk menampilkan biaya pengiriman Kurir POS
* <code>getTIKICost(params)</code> untuk menampilkan biaya pengiriman Kurir TIKI
* <code>getRPXCost(params)</code> untuk menampilkan biaya pengiriman Kurir RPX
* <code>getESLCost(params)</code> untuk menampilkan biaya pengiriman Kurir ESL
* <code>getPCPCost(params)</code> untuk menampilkan biaya pengiriman Kurir PCP
* <code>getInterOrigins()</code> untuk menampilkan data Kota (asal pengiriman) yang tersedia untuk pengiriman internasional
* <code>getInterOrigin(idKota)</code> untuk menampilkan data Kota (asal pengiriman) yang tersedia untuk pengiriman internasional berdasarkan ID Kota/Kabupaten
* <code>getInterDests()</code> untuk menampilkan data Negara yang mendukung pengiriman internasional
* <code>getInterDest(idNegara)</code> untuk menampilkan data Negara yang mendukung pengiriman internasional berdasarkan ID Negara
* <code>getTIKIInterConst(params)</code> untuk menampilkan biaya pengiriman internasional melalui kurir TIKI
* <code>getPOSInterCost(params)</code> untuk menampilkan biaya pengiriman internasional melalui kurir POS
* <code>getCurrency()</code> untuk menampilkan informasi nilai tukar rupiah terhadap US dollar
* <code>getJNEWaybill(params)</code> untuk melacak / mengetahui status pengiriman berdasarkan nomor resi JNE

### Pro
```javascript
var RajaOngkir = require('rajaongkir-nodejs').Pro('apiKey');
```
Tipe akun **Basic** memiliki beberapa fitur antara lain :
* <code>getProvinces()</code> untuk menampilkan seluruh data Provinsi 
* <code>getProvince(idProvinsi)</code> untuk menampilkan data Provinsi berdasarkan ID / parameter ID
* <code>getCities()</code> untuk menampilkan seluruh data Kota
* <code>getCity(idKota)</code> untuk menampilkan data Kota berdasarkan ID / Parameter ID
* <code>getJNECost(params)</code> untuk menampilkan biaya pengiriman Kurir JNE
* <code>getPOSCost(params)</code> untuk menampilkan biaya pengiriman Kurir POS
* <code>getTIKICost(params)</code> untuk menampilkan biaya pengiriman Kurir TIKI
* <code>getRPXCost(params)</code> untuk menampilkan biaya pengiriman Kurir RPX
* <code>getESLCost(params)</code> untuk menampilkan biaya pengiriman Kurir ESL
* <code>getPCPCost(params)</code> untuk menampilkan biaya pengiriman Kurir PCP
* <code>getInterOrigins()</code> untuk menampilkan data Kota (asal pengiriman) yang tersedia untuk pengiriman internasional
* <code>getInterOrigin(idKota)</code> untuk menampilkan data Kota (asal pengiriman) yang tersedia untuk pengiriman internasional berdasarkan ID Kota/Kabupaten
* <code>getInterDests()</code> untuk menampilkan data Negara yang mendukung pengiriman internasional
* <code>getInterDest(idNegara)</code> untuk menampilkan data Negara yang mendukung pengiriman internasional berdasarkan ID Negara
* <code>getTIKIInterConst(params)</code> untuk menampilkan biaya pengiriman internasional melalui kurir TIKI
* <code>getPOSInterCost(params)</code> untuk menampilkan biaya pengiriman internasional melalui kurir POS
* <code>getCurrency()</code> untuk menampilkan informasi nilai tukar rupiah terhadap US dollar
* <code>getJNEWaybill(params)</code> untuk melacak / mengetahui status pengiriman berdasarkan nomor resi JNE

<a name="announcements"></a>
# Pengumuman
RajaOngkimumr Node.js masih dalam tahap pengembangan, mungkin semua fitur tidak tercover atau masih terdapat Bug dalam penggunaan API RajaOngkir.com 

<a name="contribute"></a>
# Cara Kontribusi
Saya sangat menghargai setiap kontribusi Anda dalam pengembangan Package RajaOngkir Node.js.
* Anda dapat Melaporkan issue (Kesalahan Program, Saran, dll) dengan membuat **New Issue** melalui halaman [Issue](https://github.com/andhikamaheva/rajaongkir-nodejs/issues)
* Anda juga dapat berkontribusi untuk Package ini dengan cara [Pull Request](https://github.com/andhikamaheva/rajaongkir-nodejs/pulls) 


<a name="about"></a>
# Tentang
RajaOngkir NodeJS merupakan Package Node.js yang dapat digunakan oleh pengembang perangkat lunak dalam mengkonsumsi API http://rajaongkir.com . RajaOngkir Node.js merupakan Unofficial Package yang dikembangkan oleh pihak eksternal RajaOngkir.com.
Package ini masih dalam tahap pengembangan dan mungkin terjadi beberapa error dalam penggunaanya.

Info lebih lanjut Anda dapat menghubungi Andhika Maheva Wicaksono melalui email [andhikamaheva@gmail.com](mailto:andhikamaheva@gmail.com).



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

