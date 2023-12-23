
let buttonSubmitCount = document.querySelector('#submitCount')
let valor = document.querySelector('#valor')
let listagem = document.querySelector('#listagem')
let list = document.querySelector('#list')
let listResult = document.querySelector('#listResult')

let submitResult = document.querySelector('#submitResult')

buttonSubmitCount.addEventListener("click", adicionar)
buttonSubmitCount.addEventListener("keydown", function(event){
    if(event.key === 'enter'){
        return adicionar
    }
})
submitResult.addEventListener("click", somar)

let arr = []
let juntando;


function adicionar(){

    if(valor.value === ''){
        alert('por favor, informar um valor')
    }else{
    arr.push(valor.value)
    }

    juntando = arr.toString().replaceAll(',', '+')
    list.innerHTML = juntando
    listagem.lastChild = juntando
    console.log(arr)

}

function somar(n){

    let arrayDeNumeros = arr.map(str => parseInt(str, 10))

    let soma = arrayDeNumeros.reduce(function(n, value){
        return n + value
    })
    
    listResult.innerHTML = `Soma dos valores: ${soma}`

    console.log('Soma dos valores:', soma);
}