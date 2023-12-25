let verificar = document.querySelector('#verificar')
let numero = document.querySelector('#numero')
let numVerifi = document.querySelector('#numVerifi')
let res = document.querySelector('#res')

verificar.addEventListener('click', verificarArray)
let array = []
function verificarArray(){
    array.push(numero.value)
    let localizarNumero = Number(numVerifi.value)


    const setUnico = new Set(array);
    const deVoltaAAray = [...setUnico];

    let arrayDeNumero = deVoltaAAray.join(', ').toString()
                                    .replaceAll(',','').split(' ')
                                    .map(str => parseInt(str, 10))

    

    const setUnico2 = new Set(arrayDeNumero);
    const deVoltaAAray2 = [...setUnico2];
    let localizar = deVoltaAAray2.indexOf(localizarNumero) + 1

    console.log(localizar)

    if(localizar === 0){
        res.innerHTML = `Numero não localizado`
    }else{
        res.innerHTML = `Numero localizado na posição: ${localizar}`
    }

}

