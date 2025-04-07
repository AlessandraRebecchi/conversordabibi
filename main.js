


document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("botaoConverter");
    if (botao) {
        botao.addEventListener("click", conversor);
    } else {
        console.error("⚠️ ERRO: Botão de conversão não encontrado no HTML!");
    }
});

async function conversor() {
    let valorEmEuros = document.getElementById("valorEuro").value;
    valorEmEuros = parseFloat(valorEmEuros);

    if (isNaN(valorEmEuros) || valorEmEuros <= 0) {
        document.getElementById("resultado").textContent = "❌ Digite um valor válido, capivara do meu coração!";
        return;
    }

    // Chave da API (verifique se está correta)
    const apiKey = "8d3f9e449d13a4e7e9946739";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/EUR`;

    // Valor fixo caso a API falhe
    const taxaFixaBackup = 6.16;  

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Erro na API");

        const data = await response.json();
        console.log("Resposta da API:", data); // Depuração

        const taxaDeCambio = data.conversion_rates?.BRL;
        if (!taxaDeCambio) throw new Error("Campo conversion_rates.BRL não encontrado");

        // Faz a conversão
        let valorEmReais = valorEmEuros * taxaDeCambio;

        // Exibe o resultado na página

       // alert("O valor convertido representa R$" + valorEmReais)

        document.getElementById("resultado").textContent = 
            `💰 €${valorEmEuros.toFixed(2)} = R$${valorEmReais.toFixed(2)} (cotação API: ${taxaDeCambio}) 
            Precisa usar tudo isso mesmo, meu amorzinho? Hahaha`;

    } catch (error) {
        console.error("Erro ao obter taxa de câmbio:", error);

        // Usa o valor fixo se a API falhar
        let valorEmReais = valorEmEuros * taxaFixaBackup;
        document.getElementById("resultado").textContent = 
            `⚠️ Eita, não foi possível obter a cotação atual. Usando taxa fixa de R$${taxaFixaBackup} por €1.00. 
            💰 €${valorEmEuros.toFixed(2)} = R$${valorEmReais.toFixed(2)}`;
    }
}
