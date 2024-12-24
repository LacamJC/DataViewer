const express = require('express')
const server = express()
const port = 3001
const bodyParser = require('body-parser')
const cors = require('cors')
const bd_data = require('./database/models/bd_data')


server.use(express.json())
server.use(cors())
server.use(bodyParser.urlencoded({extended:false}))

server.get('/', (req,res) => {
    res.send("Olá seja bem vindo ao meu backend")
})

server.post('/setData', async (req,res)=>{
    console.log("Cadastrando novos dados")
    const data = {
        name: req.body.name,
        lastName : req.body.lastName,
        participation : req.body.participation
    }

    try{
        await bd_data.create({
            name          : data.name,
            lastName      : data.lastName,
            participation : data.participation
        })
        .then(()=>{
            console.log("/////// Data insert successful")
            res.status(201).send({message : "Usuario criado com sucesso"})
        })
    }catch(err){
        console.log(`////// Erro ao criar data: ${err}`)
        res.status(401).send({message: "Erro ao criar usuario"})
    }
})

server.get('/getData', async (req,res)=>{
    console.log("PEGANDO TODOS OS DADOS")
    try{
        bd_data.findAll({})
        .then(data=>{
            !data ? console.log("TABELA VAZIA") : console.log("TABELA COM DADOS")

            const jsonData = JSON.stringify(data, null, 2)

            res.status(201).send(jsonData)
        })
        .catch(err=>{
            console.log("ERRO AO FAZER BUSCA")
        })
    }catch(err){
        console.log("IMPOSSIVEL FAZER BUSCA")
    }
})

server.listen(port, ()=>{
    console.log(`Servidor aberto na porta: ${port}`)
})