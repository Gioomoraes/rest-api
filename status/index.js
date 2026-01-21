const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/createproduct', (req, res) => {
  const { name, price } = req.body

  console.log(name, price)

  res.status(201).json({
    message: `o produto ${name} foi criado`
  })
})

app.get('/', (req, res) => {
  res.status(200).json({ message: 'primeira rota' })
})

app.listen(3006, () => {
  console.log('TEST-POST rodando na porta 3006')
})
