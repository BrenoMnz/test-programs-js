let num = document.getElementById('num')

function gerar() {
    var n = Number(num.value)
    var res = document.getElementById('res')

    if (num.value == "") {
        alert("Por favor, digite um número!")
    } else {
        res.innerHTML = ""

        for (var i = 0; i <= 10; i++) {
            var opt = document.createElement('option')
            opt.value = i;
            opt.innerHTML = `${n} x ${i} = ${n*i}`
            res.appendChild(opt)
        }
    }
}