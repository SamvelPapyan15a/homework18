/*
2․ ՈՒնենք config.json ֆայլ ,
{
    "host" : "localhost",
    "port" : 3000
}
 պարունակությամբ ․ Ստեղծել սերվեր , որը լսում է json-ի մեջ լրացված հոսթին և պորտին։
*/

const http = require('http');
const fs = require('fs');
const json = fs.readFileSync('./config.json');
const obj = JSON.parse(json);

const server = http.createServer(function(req,res){
   res.writeHead(200);
   res.end('Homework 18');
});

server.listen(obj.port, obj.host, function(){
    console.log(`${obj.host}:${obj.port}`);
});