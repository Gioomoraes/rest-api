const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    }))

    app.use(express.json())

    app.post('/createproduct', (req, res) => {
        const name = req.body.name
        const price = req.body.price

        console.log(name)
        console.log(price)

          res.status(201).json({
    message: 'Produto recebido',
    product: { name, price }
  })
    })

    app.get('/', (req, res) =>{
        res.json({message: 'primeira rota'})

    })

    app.listen(3001)
