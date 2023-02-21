function composicao (fn1,fn2,valor) {
    return (fn2(fn1(valor)))
}
function gritar(texto) {
return texto.Uppercase()
}
function enfatizar(texto) {
return '${texto}!!!!!'
}
function solicitar {
    return texto.split('').join(' ')
}

const resultado = composicao(
    gritar,
    enfatizar,
    solicitar,
    'MEU TEXTO'
)