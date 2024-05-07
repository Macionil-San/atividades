function calcularReajuste() {
    var nome = prompt("Qual é o nome do funcionário?");
    var salarioAtual = parseFloat(prompt("Qual é o salário atual do funcionário?"));
    var porcentagem = parseFloat(prompt("Qual é a porcentagem de aumento salarial?"));
  
    var aumento = salarioAtual * (porcentagem / 100);
    var novoSalario = salarioAtual + aumento;
    var aumentoMensal = aumento / 12;
  
    var output = document.getElementById("output");
    output.innerHTML = `
      <h2>Resultado:</h2>
      <p>O funcionário ${nome} terá um aumento de R$ ${aumento.toFixed(2)} no salário.</p>
      <p>O novo salário será de R$ ${novoSalario.toFixed(2)}.</p>
      <p>O aumento mensal será de aproximadamente R$ ${aumentoMensal.toFixed(2)}.</p>
    `;
  }