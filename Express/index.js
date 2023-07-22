const express = require('express') // Importando o Express
const app = express() // Abreviando o express na hr de ser chamado
const port = 3000 // Definindo a porta em que a aplicação vai rodar
const path = require('path') // Importando Path
const basePath = path.join(__dirname, 'template') // dando rotas de um documento
const users = require('./users')


app.use('/users', users)


app.get('/', (req, res) => { // definindo a roda /mensagem req == requisição , res == resposta
    res.sendFile(`${basePath}/main.html`) // resposta da rota
})
app.use(function (req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})
app.listen(port, () => { // dando a porta e imprimindo no console uma mensagem para entender que esta rodando
    console.log(`app rodando na porta ${port}`) // mensagem mostarda no console quando executado
})