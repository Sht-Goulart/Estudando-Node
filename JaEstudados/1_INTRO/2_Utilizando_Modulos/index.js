const fs = require('fs') // File System

fs.readFile('arquivo.txt', 'utf8', (error, data) =>{
    if(error){
        console.log(error)
    }

    console.log(data)
})