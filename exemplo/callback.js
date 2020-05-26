
const faze02 = param => {
    setTimeout(()=>{}, 1000)
    console.log(param)
}

const faze01 = (param) => {
    param('fez')
    console.log('fez de faze01')
}

faze01(faze02)