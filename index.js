//jshint esversion 6
const { log } = require("console");
const fs = require("fs")

fs.copyFileSync("file1.txt","file2.txt")

const superheroes = require('superheroes');
 
var allHeroes=superheroes.all;
console.log(allHeroes);
var singlesuperHero=superheroes.random();
console.log(singlesuperHero);
