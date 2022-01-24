const express = require('express')
const rotas = express.Router()

let animesinfo=[
  {'Anime': "Konosuba", 'info': 'Anime de comédia'},
  {'Anime': "gintama", 'info': 'Anime de comédia'},
  {'Anime': "danshi kokousei", 'info': 'Anime de comédia'},
  {'Anime': "non non biyori", 'info': 'Anime relax'},
  {'Anime': "Leanalee", 'info': 'Anime de comédia'},
]

rotas.get('/', (req, res) => {
  res.json({ola: 'Seja bem-vindo'})
})

rotas.get('/:animeid', (req, res) => {
  const anime = req.params.animeid
  const animex = animesinfo.find(i=>i.Anime == anime)
  if(!animex){
    res.status(404).json(
      { erro : 'Anime not found', AnimePesquisado: anime}
    )
  } else {
    res.status(200).json(animex)
  }
})
module.exports = rotas;