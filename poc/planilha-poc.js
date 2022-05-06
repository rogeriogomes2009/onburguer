require('dotenv').config({ path: '../.env.homologacao' })

const { GoogleSpreadsheet } = require('google-spreadsheet')
const credenciais = require('../credenciais.json')

const doc = new GoogleSpreadsheet(
  '1PWNyNVpYOz5ooZyuog7zRWo4_cIm_8MEyjkw8IjJwdA'
)
const run = async () => {
  await doc.useServiceAccountAuth({
    client_email: process.env.EMAIL_GOOGLE_API,
    private_key: credenciais.private_key,
  })
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[1]
  await sheet.addRows([
    {
      Pedido: '1',
      Cliente: 'Rogério Gomes',
      Telefone: '21 972300670',
      Endereço: 'Rua Luiz Fabiano, 49 - Tribobó - SG',
      Produto: 'Combo 1',
      Quantidade: '2',
      ValorUnit: 'R$ 32,00',
      Total: 'R$ 64,00',
      StatusPg: 'Aguardando PIX',
      StatusEntrega: 'A Confirmar',
    },
  ])
}
run()
