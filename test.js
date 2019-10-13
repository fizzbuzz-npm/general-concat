const test = require('ava');
const concat = require("./index.js");

test('strings', t => {
    t.is(concat("hello", "world"), "helloworld");
});

test('numbers', t => {
    t.is(concat(-0, 4.5, 10), "-04.510");
});
