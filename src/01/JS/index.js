
let buttonSubmitCount = document.querySelector('#submitCount')
let valor = document.querySelector('#valor')

let listResult = document.querySelector('#listResult')

let reset = document.querySelector('#reset')

buttonSubmitCount.addEventListener("click", somarValores)
reset.addEventListener("click", limpandoArea)

let arr = []


function somarValores(){

    if(valor.value === ''){
        alert('Campo vazio ou inserido uma string')
    }
    
    arr.push(valor.value)

    let tranformandoEmNumeros = arr.join(', ').toString()
                                    .replaceAll(',', '').split(' ')
                                    .map(n => parseInt(n, 10))
    
    let saoNumeros = tranformandoEmNumeros.every(numero => !isNaN(numero));
    
    if (!saoNumeros) {
        alert('Campo vazio ou informado uma string')
        return limpandoArea()
    }

    let retirandoRepetidos = new Set(tranformandoEmNumeros)
    let repetidosRetirados = [...retirandoRepetidos]

    listResult.innerHTML = repetidosRetirados

}

function limpandoArea(){
    valor.value = ''
    arr = []
    listResult.innerHTML = ''
}