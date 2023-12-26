let valoresInformados = document.querySelector('#valoresInformados')
let submit = document.querySelector('#submit')
let reset = document.querySelector('#reset')
let result = document.querySelector('#result')

submit.addEventListener('click', localizadoNumeroMaximo)
reset.addEventListener('click', limpandoArea)


let arr = []

function localizadoNumeroMaximo(){

    if(valoresInformados.value === ''){
        alert('campo vazio ou informa uma string')
    }

    arr.push(valoresInformados.value)

    let tranformandoEmNumeros = arr.join(', ').toString()
                                    .replace(',', '').split(' ')
                                    .map(n => parseInt(n, 10))

    let saoNumeros = tranformandoEmNumeros.every(numero => !isNaN(numero));
    
    if (!saoNumeros) {
        alert('Campo vazio ou informado um numero')
        return limpandoArea()
    }

    let retirandoRepeticao = new Set(tranformandoEmNumeros)
    let repeticaoRetirado = [...retirandoRepeticao]


    let maiorNumero = Math.max.apply(null, repeticaoRetirado)

    result.innerHTML = maiorNumero

    console.log(maiorNumero)

}

function limpandoArea(){
    valoresInformados.value = ''
    arr = []
    result.innerHTML = ''
}