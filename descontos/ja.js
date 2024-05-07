document.getElementById('calculateBtn').addEventListener('click', function() {
    var productName = prompt('Qual é o produto que está sendo comprado?');
    var productPrice = parseFloat(prompt('Qual é o preço do produto?'));
    
    if (!isNaN(productPrice)) {
      var discountAmount = productPrice * 0.1;
      var discountedPrice = productPrice - discountAmount;
      
      document.getElementById('output').innerHTML = "Você comprou " + productName + " por R$" + productPrice.toFixed(2) + ". Com o desconto de 10%, o preço final é R$" + discountedPrice.toFixed(2) + ". Você economizou R$" + discountAmount.toFixed(2) + ".";
    } else {
      alert('Por favor, insira um preço válido.');
    }
  });