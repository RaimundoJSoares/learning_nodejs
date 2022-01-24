const express = require('express');
const rotas = require('./rotas')
const porta = process.env.PORT
const app = express()

app.use('/', rotas)

app.get('*', (req, res) => {
  res.send('Animes recomendados')
})

app.listen(porta || 3000 , () => {console.log('Funcionando')})