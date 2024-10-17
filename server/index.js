import Express from 'express'

const app = Express()


app.get('/pegar', function (req, res) {
    res.send('enviar esta mensagem')
})

app.get('/pegaroutracoisa', function (req, res) {
    res.send('esta é outra mensagem')
})

app.listen(8000)