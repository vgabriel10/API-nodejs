const express = require('express')
const app = express()

const PORT = process.env.PORT || 8877

app.get('/about',(req,res) => {
    res.json({
        name: 'Vitor Gabriel',
        email: 'vittorgabriell420@gmail.com',
        urls:[
            {
                type: 'github',
                url: 'https://github.com/vgabriel10'
            },
            {
                type: 'discord',
                url: 'Vitor Gabriel#1280'

            }

        ],
        
    })
})


app.get('/',(req,res) => {
    res.json({
        msg: 'OK'
    })
})

app.listen(PORT,() => {
    console.log('Escutando na porta: '+ PORT)
})