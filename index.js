//var generateName = require('sillyname');

import generateName from "sillyName";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

import superheroes from "superheroes";
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
 const name = superheroes.random();

console.log(`I am ${name}!`);