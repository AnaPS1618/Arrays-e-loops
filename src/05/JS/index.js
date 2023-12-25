let valoresDaArray = document.querySelector('#valoresDaArray')
let verificar = document.querySelector('#verificar')

let resultadoImpar = document.querySelector('#resultadoImpar')
let resultadoPar = document.querySelector('#resultadoPar')

let result = document.querySelector('#result')

let limpar = document.querySelector('#limpar')

verificar.addEventListener('click', verificandoArray)
limpar.addEventListener('click', limparArea)

let arr = []

let deVoltaAAray3 = []
let deVoltaAAray4 = []

function verificandoArray(){
    if(valoresDaArray.value === ''){
        return alert('Campo vazio ou informado uma string')
    }

    console.log(valoresDaArray.value)
    arr.push(valoresDaArray.value)

    const setUnico = new Set(arr);
    const deVoltaAAray = [...setUnico];

    let modificandoArray = deVoltaAAray.join(', ').toString()
                            .replace(',', '')
                            .split(' ')
                            .map(str => parseInt(str, 10))

    console.log(modificandoArray)

    let saoNumeros = modificandoArray.every(numero => !isNaN(numero));
    
    if (saoNumeros) {
        console.log("Os números são:", modificandoArray);
    } else {
        alert('Campo vazio ou informado uma string')
        return limparArea()
    }

    const setUnico2 = new Set(modificandoArray);
    const deVoltaAAray2 = [...setUnico2];

    let arrayDePares = deVoltaAAray2.filter((n) => {
        return n % 2 === 0
    })

    let arrayDeImpares = deVoltaAAray2.filter((n) => {
        return n % 2 !== 0
    })

    const setUnico3 = new Set(arrayDePares);
    deVoltaAAray3 = [...setUnico3];

    const setUnico4 = new Set(arrayDeImpares);
    deVoltaAAray4 = [...setUnico4];

    resultadoPar.innerHTML = 'Numeros Pares: ' + deVoltaAAray3
    resultadoImpar.innerHTML = 'Numeros Impares: ' + deVoltaAAray4
    
}

function limparArea(){
    valoresDaArray.value = ''
    arr = []
    resultadoPar.innerHTML = ''
    resultadoImpar.innerHTML = ''
}