const Papa = require('papaparse')
const Queue = require('./queue')

class ParseJSON {

    converteParaJSON() {

        const continua = setInterval(() => {
            if (Queue.filaCSV.length === 0) {
                console.log('Comessou converteParaJSON ' + Queue.filaCSV.length)

                if (Queue.terminouProcessoCSV) {
                    clearInterval(continua)
                }

            } else {
                const csv = Queue.filaCSV.shift()
                console.log('CSV:', csv)
                const data = Papa.parse(csv)
                Queue.filaJSON.push(data)
                console.log('Tamanho CSV: ', Queue.filaJSON.length)
            }
        }, 100)
        console.log('Terminou processo JSON')
    }
}

module.exports = ParseJSON