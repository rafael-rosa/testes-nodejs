var http = require('http');
var ip = 'localhost';
var server = http.createServer(function(req,res){
	console.log('Recebendo o request');
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end("<html><head>	<title></title></head><h1>Listando os produtos</h1><body></body></html>");
});
server.listen(3000,ip);

console.log('Servidor rodando');