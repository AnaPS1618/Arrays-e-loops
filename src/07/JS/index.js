

let nomesInformados = document.querySelector('#nomesInformados')
let letraParaLocalizar = document.querySelector('#letraParaLocalizar')

let localizarNome = document.querySelector('#localizarNome')
let reset = document.querySelector('#reset')
let result = document.querySelector('#result')

localizarNome.addEventListener('click', localizadoNome)
reset.addEventListener('click', limpandoArea)

let arr = []

function localizadoNome(){

    if(letraParaLocalizar.value === '' || nomesInformados.value === ''){
        alert('Necessário inserir informação')
    }

    let letra = letraParaLocalizar.value

    arr.push(nomesInformados.value)

    let separandoNomes = arr.join(', ').toString()
                            .replaceAll(',', '').split(' ')

    let saoNumeros = separandoNomes.every(numero => isNaN(numero));
    
    if (saoNumeros) {
        console.log(separandoNomes);
    } else {
        alert('Campo vazio ou informado um numero')
        return limpandoArea()
    }

    let verificandoRepeticoes = new Set(separandoNomes)
    let repeticoesVerificadas = [...verificandoRepeticoes]

    let localizarNome = repeticoesVerificadas.filter((n) => {
        return n.charAt(0).toUpperCase() === letra.toUpperCase()
    })

    result.innerHTML = 'Nomes localizados: ' + localizarNome.join(', ').toString()

}

function limpandoArea(){
    letraParaLocalizar.value = ''
    nomesInformados.value = ''
    arr = []
    result.innerHTML = ''

}