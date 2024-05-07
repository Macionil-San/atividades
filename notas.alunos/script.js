document.getElementById('calcularBtn').addEventListener('click', function() {
    var nome = prompt("Digite o nome do aluno:");
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));

    var media = (nota1 + nota2) / 2;

    var situacao;

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 4) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    var output = document.getElementById('output');
    output.innerHTML = "Nome do aluno: " + nome + "<br>" +
                       "Média: " + media.toFixed(2) + "<br>" +
                       "Situação: " + situacao;
});