const fs = require('fs');
const readline = require('readline');
const Queue = require('./queue')


class ArquivoCSV {
    constructor(arquivo) {
        this.nomeArquivo = arquivo
    }

    qtdeRegistros() {
        return new Promise((resolve, reject) => {

            const contents = fs.readFileSync(this.nomeArquivo, 'utf8')
            const matches = contents.match(/\n/g)
            Queue.totalRegistrosCSV = matches.length - 1

            resolve(Queue.totalRegistrosCSV)
        })
    }

    listaArquivo() {
        return new Promise((resolve, reject) => {

            try {
                const rl = readline.createInterface({
                    input: fs.createReadStream(this.nomeArquivo),
                    output: process.stdout,
                    terminal: false
                })
                
                rl.on('line', function (line) {
                    Queue.filaCSV.push(line)
                })
    
                rl.on('close', () => {
                    Queue.terminouProcessoCSV = true
                    console.log('terminou processo LeituraCSV')
                    resolve({ 'resultado': 'Sucesso' })
                })
            } catch (error) {
                reject({ 'resultado': 'Erro', error })
            }

        })
    }

}

module.exports = ArquivoCSV