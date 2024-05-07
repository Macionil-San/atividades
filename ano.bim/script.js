function verificarAno() {
    const anoInput = document.getElementById('anoInput').value;
    const resultadoDiv = document.getElementById('resultado');
  
    if (anoInput.trim() === '') {
      resultadoDiv.innerText = 'Por favor, insira um ano válido!';
  
      return;
    }
  
    const ano = parseInt(anoInput);
  
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      resultadoDiv.innerText = `O ano ${ano} é bissexto! 😀 `;
      
    } else {
        resultadoDiv.innerText = `O ano ${ano} não é bissexto! 😓 `;
      
    }
  }