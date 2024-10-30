const axios = require ('axios')
const express = require ('express')
const app = express()
app.use(express.json())

let id = 2

const baseLembretes = {
    1: {
        id: 1,
        texto: 'Fazer cafe'
    }
}
/*
    {
        1:{
            id: 1,
            texto: fazer cafe
        },
        2:{
            id: 2,
            texto: nadar
        }
    }
*/

//GET /Lembretes
app.get('/lembretes', (req, res) => {
    res.json(baseLembretes)
})

//POST /Lembretes
app.post('/lembretes', async function(req, res){
    const texto = req.body.texto
    const lembrete = {id: id, texto: texto}
    baseLembretes[id] = lembrete
    id++
    await axios.post('http://localhost:10000/eventos', {
        type: 'LembrenteCridado',
        payload: lembrete
    })
    res.status(201).json(baseLembretes)
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    res.end()
})

const port =  4000
app.listen(port, () => {
console.log(`Lembrentes. Porta ${port}.`)
})