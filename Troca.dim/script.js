document.getElementById("startButton").addEventListener("click", solicitarInformacoes);

function solicitarInformacoes() {
    var produto = prompt("Qual é o nome do produto?");
    var preco = parseFloat(prompt("Informe o preço do produto:"));
    var pagamento = parseFloat(prompt("Quanto em dinheiro o cliente deu para pagar o produto?"));

    if (isNaN(preco) || isNaN(pagamento)) {
        alert("Por favor, informe um valor numérico válido.");
        return;
    }

    var troco = pagamento - preco;
    if (troco < 0) {
        alert("O valor pago é insuficiente. Por favor, forneça um valor maior ou igual ao preço do produto.");
        return;
    }

    alert("Troco: R$ " + troco.toFixed(2));
}