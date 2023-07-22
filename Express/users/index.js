const express = require('express') // Importando o Express
const router = express.Router()

const path = require('path') // Importando Path
const basePath = path.join(__dirname, '../template') // dando rotas de um documento


router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
  })

  router.post('/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age
  
    console.log(name)
    console.log(age)
  })
  
  // antes do /
  router.get('/:id', (req, res) => {
    console.log(`Carregando usuário: ${req.params.id}`)
  
    res.sendFile(`${basePath}/users.html`)
  })
  
module.exports = router
