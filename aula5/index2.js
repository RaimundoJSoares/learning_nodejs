const http = require('http');
const fs = require('fs')
const porta = process.env.PORT

const server = http.createServer((req, res) =>{
  fs.appendFile('teste.txt', 'Free and Happy', (erro) => {
   if (erro) throw erro
   console.log('Arquivo Criado')

   res.end()
  })
})

server.listen(porta || 3000, () => console.log('Servidor rodando'))