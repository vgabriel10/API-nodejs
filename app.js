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

app.get('/usuarios',(req,res) => {
    res.json[({
        nome: 'João Ferreira',
        dataNascimento: '10/12/2000',
        email:'joão@gmail.com',
        telefone: '988884142',
        cidade: 'Fortaleza/CE'
    }),
    ({
        nome: 'Isabel Costa',
        dataNascimento: '10/12/2000',
        email:'isabelcost@gmail.com',
        telefone: '988888442',
        cidade: 'Fortaleza/CE'
    }),
    ({
        nome: 'Marcelo Sousa',
        dataNascimento: '10/12/2000',
        email:'marcelooosousa@gmail.com',
        telefone: '988544142',
        cidade: 'Fortaleza/CE'
    }),
    ({
        nome: 'Leticia Silva',
        dataNascimento: '10/12/2000',
        email:'leticiaa@gmail.com',
        telefone: '988784042',
        cidade: 'Fortaleza/CE'
    })
]})

app.get('/',(req,res) => {
    res.json({
        msg: 'OK'
    })
})

app.listen(PORT,() => {
    console.log('Escutando na porta: '+ PORT)
})