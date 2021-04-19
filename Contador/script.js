function contar() {
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var cont = document.getElementById('cont')
    var res = document.getElementById('res')

    if (ini.value == "" || fim.value == "" || cont.value == "") {
        res.innerHTML = "Impossível contar!"
    } else {
        if (Number(cont.value) <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            cont.value = "1"
        }
        var i = Number(ini.value)
        var f = Number(fim.value)
        var c = Number(cont.value)

        res.innerHTML = ""

        if (i < f) {
            for (i; i <= f; i+= c) {
                res.innerHTML += `${i} ${String.fromCodePoint(0x1F449)} `//um jeito de mostrar emoji
            }
        } else {
            for (i; i >= f; i -= c) {
                res.innerHTML += `${i} ${String.fromCodePoint(0x1F449)} `//um jeito de mostrar emoji
            }
        }
        res.innerHTML += `\u{1F3C1}`//outro jeito de mostrar emoji
    }
}