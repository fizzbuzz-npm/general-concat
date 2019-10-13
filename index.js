"use strict"
const toString = require('to-str')

function concat(...args) {
    return args.reduce((acc, val) => acc + toString(val), "")
}

module.exports = concat
