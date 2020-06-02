const Papa = require('papaparse')
const Queue = require('./queue')

class ParseJSON {

    converteParaJSON() {

        const continua = setInterval(() => {
            // console.log('Iniciou converteParaJSON')
            if (Queue.filaCSV.length === 0) {
                console.log('Tamanho filaCSV: ', Queue.filaCSV.length, ' Status processoCSV: ', Queue.terminouProcessoCSV)

                if (Queue.terminouProcessoCSV) {
                    clearInterval(continua)
                }

            } else {
                console.log('Queue: ', Queue.filaCSV.length)
                const csv = Queue.filaCSV.shift()
                const data = Papa.parse(csv)
                Queue.filaJSON.push(data)
            }
        }, 1)
        // console.log('Terminou processo JSON')
    }
}

module.exports = ParseJSON