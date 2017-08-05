# barcode-from-binary

[![Build Status](https://travis-ci.org/agarrharr/barcode-from-binary.svg?branch=master)](https://travis-ci.org/agarrharr/barcode-from-binary)

## Install

```
$ npm install --save barcode-from-binary
```

## Usage

```js
const barcodeFromBinary = require('barcode-from-binary');

barcodeFromBinary('10100011010110001001100100011010001101000110101010111001011001101101100100111011001101000100101')
//=> '0 51000 01251 7'
```

## API

### barcodeFromBinary(binary)

Returns decimal value of barcode binary.

#### binary

Type: `string`

A binary representation of the barcode number in binary.

## License

MIT
