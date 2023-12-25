const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let number = document.querySelector('#number')
let somar = document.querySelector('#somar')
let reset = document.querySelector('#reset')

let somaDeParesResult = document.querySelector('#somaDeParesResult')
let somaDeImparesResult = document.querySelector('#somaDeImparesResult')


somar.addEventListener("click", somandoParesEImpares)
reset.addEventListener("click", limpandoArea)

let arr = []

function somandoParesEImpares(){

    if(number.value === ''){
        return alert('Campo vazio ou informado uma string')
    }

    arr.push(number.value)

    let transformandoStringEmNumeros = arr.join(', ')
                                        .replace(',', '')
                                        .split(' ')
                                        .map(n => parseInt(n, 10))

    let saoNumeros = transformandoStringEmNumeros.every(numero => !isNaN(numero));
    
    if (saoNumeros) {
        console.log("Os números são:", transformandoStringEmNumeros);
    } else {
        alert('Campo vazio ou informado uma string')
        return limpandoArea()
    }

    let retirandoRepetidos = new Set(transformandoStringEmNumeros)
    let repetidosRetirados = [...retirandoRepetidos]

    let pares = repetidosRetirados.filter((n) => {
        return n % 2 === 0
    })

    let impares = repetidosRetirados.filter((n) => {
        return n % 2 !== 0
    })

    let somaPares = 0

    for(let i of pares){
        somaPares += i
    }

    let somaImpares = 0

    for(let i of impares){
        somaImpares += i
    }

    somaDeParesResult.innerHTML = 'Total dos valores pares: ' + somaPares
    somaDeImparesResult.innerHTML = 'Total dos valores impares: ' + somaImpares

    
}

function limpandoArea(){
    number.value = ''
    arr = []
    somaDeParesResult.innerHTML = ''
    somaDeImparesResult.innerHTML = ''
}