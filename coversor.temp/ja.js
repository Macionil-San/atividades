function converterTemperatura() {
    var celsius = prompt("Digite a temperatura em Celsius (˚C):");

    if (celsius !== null && celsius !== "") {
        celsius = parseFloat(celsius);
        var kelvin = celsius + 273.15;
        var fahrenheit = celsius * 9/5 + 32;

        let output = document.getElementById("output");
        output.innerHTML = `
            <p>${celsius}˚C é equivalente a:</p>
            <p>${kelvin.toFixed(2)}˚K (Kelvin)</p>
            <p>${fahrenheit.toFixed(2)}˚F (Fahrenheit)</p>
        `;
    } else {
        alert("Por favor, insira uma temperatura válida.");
    }
}