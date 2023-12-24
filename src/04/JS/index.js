
let multiploDe = document.querySelector('#multiploDe')
let entreN = document.querySelector('#entreN')
let eN = document.querySelector('#eN')

let resultado = document.querySelector('#caixaDeResultado')

let limpar = document.querySelector('#limpar')

let visualizarResultado = document.querySelector('#visualizarResultado')
visualizarResultado.addEventListener('click', multiplos)
limpar.addEventListener('click', limparInput)

let arr = []

function multiplos(){

    if(entreN.value === '' || eN.value === '' || multiploDe.value === ''){
        return alert('Por favor, informe valores')
    }

    for(let i = parseInt(entreN.value); i <= parseInt(eN.value); i++){
        if(i % parseInt(multiploDe.value) === 0){
            console.log(i)
            arr.push(i)
        }
    }
    
    resultado.innerHTML = arr
    resultado.style.display = 'block'
}

function limparInput(){
    multiploDe.value = '';
    entreN.value = '';
    eN.value = '';
    arr = []
    resultado.innerHTML = ''

}
