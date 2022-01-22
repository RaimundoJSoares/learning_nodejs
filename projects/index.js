const http = require('http');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'text/html'})
  if (req.url == '/'){
    res.write('<h1>Welcome to my learning course</h1>')
  }else if (req.url== '/canal1') {
    res.write('<h1>I am Glaad to study NodeJS</h1>')
  }if(req.url =='/canal2') {
    res.write('<h1>I will be the best of myself everyday</h1>')
  }
  res.end();
})

servidor.listen(porta, host, ()=>{console.log('Tudo funcionando')})