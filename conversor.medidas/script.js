  function converterDistancia() {
    var distanciaEmMetros = parseFloat(document.getElementById("distancia").value);

    if (isNaN(distanciaEmMetros)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    var medidas = {
        "Kilômetro": distanciaEmMetros / 1000,
        "Hectômetro": distanciaEmMetros / 100,
        "Decâmetro": distanciaEmMetros / 10,
        "Decímetro": distanciaEmMetros * 10,
        "Centímetro": distanciaEmMetros * 100,
        "Milímetro": distanciaEmMetros * 1000
    };

    var output = document.getElementById("output");
    output.innerHTML = "";

    for (var medida in medidas) {
        output.innerHTML += "<p>" + medida + ": " + medidas[medida] + "</p>";
    }
}