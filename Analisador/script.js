let nums = []
let res = document.getElementById('res')
var num = document.getElementById('num')
let sel = document.getElementById('seladd')

function adicionar() {

    var n = Number(num.value)


    if ((nums.indexOf(n) != -1) || n < 1 || n > 100) {
        alert('Número inválido ou já encontrado na lista.')
    } else {
        let opt = document.createElement('option')
        opt.innerHTML = `Valor ${n} adicionado.`
        sel.appendChild(opt)
        nums.push(n)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (nums.length < 1) {
        alert('Adicione valores antes de finalizar!')
    } else { 
        res.innerHTML = `<p>Ao todo, temos ${nums.length} números cadastrados.</p>
        <p>O maior valor informado foi ${maiorMenorNumero(nums)[0]}.</p>
        <p>O menor valor informado foi ${maiorMenorNumero(nums)[1]}.</p>
        <p>Somando todos os valores, temos ${soma(nums)}.</p>
        <p>A média dos valores digitados é ${media()}.</p>`
    }
}

function maiorMenorNumero(matriz) {
    let sub = matriz
    let sort = sub.sort()
    return [sub[0], sub[sub.length-1]]

} 

function soma(matriz) {
    let res = 0
    for (let i = 0; i <= matriz.length-1; i++) {
        res += matriz[i]
    }
    return res
}

function media() {
    return soma(nums) / nums.length;
}