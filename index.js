'use strict';
const barcodeBinaryIsValid = require('barcode-binary-is-valid');
const barcodeConvertNumber = require('barcode-convert-number');
const barcodeGetBinarySections = require('barcode-get-binary-sections');

const barcodeFromBinary = string => {
	if (!barcodeBinaryIsValid(string)) {
		return false;
	}
	const barcode = barcodeGetBinarySections(string);
	const numbers = [...barcode.leftNumbers, ...barcode.rightNumbers].reduce((a, c) => a + barcodeConvertNumber(c), '');
	return `${numbers.slice(0, 1)} ${numbers.slice(1, 6)} ${numbers.slice(6, 11)} ${numbers.slice(11, 12)}`;
};

module.exports = string => barcodeFromBinary(string);
