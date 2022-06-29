require('dotenv').config({ path: '../.env.producao' })

const app = require('./app')

app.listen(3003, (err) => {
  if (err) {
    console.log('Servidor não Iniciado!')
    console.log(err)
  } else {
    console.log('Servidor ONBURGUER rodando na porta 3003')
  }
})
