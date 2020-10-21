'use strict';

const lodash = require('lodash');
console.log('This is not JavaScript');

const s = 'Foo Bar';
// camel case: fooBar
// cigar case: foo-bar

console.log(lodash.camelCase(s));