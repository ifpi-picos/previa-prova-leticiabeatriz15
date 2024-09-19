let lista = [1, 3, 5, 7, 2]
export function maiorNumero(lista){
    let maiorN
    if(lista.length > 0 || lista.length != ""){
        maiorN = Math.max(...lista)
    }
    else{
        return null
    }
    if(isNaN(maiorN)){
        return null
    }
    else{
        return maiorN
    }
}
console.log(maiorNumero(lista))

export function verificarParOuImpar(a){
    if(typeof a === typeof 1){
        console.log('entrou')
        if((a % 2) === 0){
            return "Par"
        }
        else{
            return "Ímpar"
        }
    }
    else{
        return null
    }
}

verificarParOuImpar(4)





