function calculate() {
    var priceBefore = parseFloat(document.getElementById("priceBefore").value);
    var priceAfter = parseFloat(document.getElementById("priceAfter").value);
  
    if (isNaN(priceBefore) || isNaN(priceAfter)) {
      document.getElementById("output").innerHTML = "Por favor, insira valores válidos.";
      return;
    }
  
    var difference = priceAfter - priceBefore;
    var percentage = (difference / priceBefore) * 100;
  
    var resultText = "";
    if (difference > 0) {
      resultText = "Houve um aumento de $" + difference.toFixed(2) + " (" + percentage.toFixed(2) + "%)";
    } else if (difference < 0) {
      resultText = "Houve uma redução de $" + Math.abs(difference).toFixed(2) + " (" + Math.abs(percentage).toFixed(2) + "%)";
    } else {
      resultText = "Os preços permaneceram iguais.";
    }
  
    document.getElementById("output").innerHTML = resultText;
  }