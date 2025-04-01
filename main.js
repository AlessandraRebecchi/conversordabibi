
// Aguarda o carregamento completo do DOM antes de adicionar eventos
document.addEventListener("DOMContentLoaded", function() {
    // Adiciona o evento de clique no botão
    document.getElementById("botaoConverter").addEventListener("click", conversor);
});

async function conversor() {
    // Obtém o valor digitado no input
    let valorEmEuros = document.getElementById("valorEuro").value;

    // Converte para número
    valorEmEuros = parseFloat(valorEmEuros);

    // Valida se o valor digitado é um número válido
    if (isNaN(valorEmEuros) || valorEmEuros <= 0) {
        document.getElementById("resultado").textContent = "❌ Digite um valor válido!";
        return;
    }


    // Definir taxa de câmbio 
    let taxaDeCambio = 6.16; 

    // Realiza a conversão
    let valorEmReais = valorEmEuros * taxaDeCambio;

    // Exibe o resultado
    alert(`💰 €${valorEmEuros.toFixed(2)} equivalem a R$${valorEmReais.toFixed(2)}  Precisa mesmo usar tudo isso, minha filha? Hahahaha`);

}
    
