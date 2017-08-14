/*Maneira 1 de construir modulos*/
/*
var registraConsole = function(){
	console.log('listagem de produtos');
}

module.exports.registra = registraConsole;
//é possível exportar várias funções, por exemplo:
module.exports.soma = function(a,b){return a+b;} 
*/



/*Maneira 2 utilizando prototype*/

function ModuloTeste(mensagemLog){
	console.log('construtor');
	this._msgLog = mensagemLog;
}

ModuloTeste.prototype.registra = function(){
	console.log('Mensagem: ' + this._msgLog);	
}
//é possível adicionar várias funcionalidades exportando diferentes funcoes com prototype


module.exports = function(){
	console.log('modulo carregado');
	return ModuloTeste;	
}





/*Explicacao da var module
Existe uma função interna do Node.js que recebe um path do módulo a ser carregado.
Essa função procura pelo local do módulo de acordo com o formato do path.

Para conseguir carregar a função do módulo, ele cria uma função com um nome do tipo funcaoDeCarregamento ou algo assim, que recebe uma função anônima e dentro dessa função, invoca a função eval() do JavaScript passando como parâmetro o que foi carregado do módulo a partir do path recebido.

Pronto! Agora o código está carregado.

Para que ele fique visível de fora, é disponibilizado um objeto chamado module ou algo do tipo, que contém um objeto exports onde ficam armazenados todos os paths passados.

Por fim a funcaoDeCarregamento é invocada recebendo como parâmetro os próprios objetos module e module.exports e é retornado o objeto module.

Essa é a maneira escolhida pelo Node.js para fazer carregamento dinâmico de módulos JavaScript. Outros frameworks podem fazer de formas diferentes.

Uma convenção que ajuda a padronizar essa estratégia é a CommonJS, que como já vimos, define várias Especificações para código JavaScript.
*/