const express = require("express")
const {v4: uuidv4} = require('uuid')
const app = express();

//função middleware
app.use(express.json())

const baseObservacoes = {}

//GET /lembreste/id/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.json(baseObservacoes[req.params.id] || [])

})

//POST /lembretes/id/observacoes
app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4()
    const { texto } = req.body
    const observacoesDoLembrete = baseObservacoes[req.params.id] || []
    observacoesDoLembrete.push({id: idObs, texto: texto})
    baseObservacoes[req.params.id] = observacoesDoLembrete
    res.status(201).json(observacoesDoLembrete)
})


const port = 5000
app.listen(port, () => {
    console.log(`Observações. Porta ${port}.`)
})