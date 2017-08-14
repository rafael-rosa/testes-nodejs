//Maneira 1
//require('./moduloTeste.js').registra();

//Maneira 2
/*
var modulo = require('./moduloTeste.js');
modulo.registra();
console.log(modulo.soma(1,3));
*/

//Maneira 3 - Modulo construído com prototype
var modulo = require('./ModuloTeste.js')();
var obj = new modulo('Testando o Modulo com prototype!');

obj.registra();




