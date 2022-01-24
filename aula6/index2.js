//usando express 

const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/', (req, res)=>{
  res.send('I love programming')
})

app.get('/new', (req, res)=>{
  res.json({anime : "KonoSuba"})
})

app.listen(porta || 3000 , () => {console.log('Rodando normalmente')})