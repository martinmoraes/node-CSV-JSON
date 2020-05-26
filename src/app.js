const ArquivoCSV = require('./arquivoCSV')
const Queue = require('./queue')
const ParseJSON = require('./parseJson')

const arquivoCSV = new ArquivoCSV('C:\\Users\\Usuário\\Downloads\\brasil\\brasil.csv')
arquivoCSV.qtdeRegistros()
    .then(res => {
        console.log(`Resultado: ${res}`)
    })

arquivoCSV.listaArquivo()
    .then(resultado => {
        console.log(`Resultado: ${JSON.stringify(resultado)} Total CSV: ${Queue.terminouProcessoCSV}`)
    })
    .catch(error => console.log(error))


new ParseJSON().converteParaJSON()

console.log('Principal')