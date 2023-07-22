const checkAuth = function (req, res, next) { //checando autenticação
    req.authStatus = false

    if (req.authStatus){
        console.log("Está logado, pode continuar")
        next()
    } else {
        console.log("Não está logado, faça o login para continuar")
        next()
    }
}

app.use(checkAuth)