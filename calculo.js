function calcular() {
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var elemResult = document.getElementById("resultado");


    if (elemResult.textContent === undefined) {
       elemResult.textContent = "O resultado é " + String(numero1 + numero2) + ".";
    }
    else {
       elemResult.innerText = "O resultado é " + String(numero1 + numero2) + ".";
    }
}
