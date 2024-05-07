function solicitarQuantidade() {
    var cotacao = prompt("Informe a cotação do dólar do dia atual:");
    if (cotacao === null || cotacao === "") {
        alert("Por favor, informe a cotação do dólar.");
        return;
    }

    cotacao = parseFloat(cotacao);
    if (isNaN(cotacao)) {
        alert("Por favor, insira um valor válido para a cotação do dólar.");
        return;
    }

    var quantidadeReais = prompt("Quantos R$ você tem na carteira?");
    if (quantidadeReais === null || quantidadeReais === "") {
        alert("Por favor, informe a quantidade de R$ que você possui.");
        return;
    }

    quantidadeReais = parseFloat(quantidadeReais);
    if (isNaN(quantidadeReais)) {
        alert("Por favor, insira um valor válido para a quantidade de R$.");
        return;
    }

    var valorDolares = quantidadeReais / cotacao;
    document.getElementById("output").innerHTML = "Você tem aproximadamente US$" + valorDolares.toFixed(2);
}