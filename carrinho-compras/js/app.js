let totalGeral = 0; // Inicializa totalGeral com 0

limpar();

function adicionar() {
    // Recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0].trim(); // Remove espaços em branco em excesso
    let valorUnitario = parseFloat(produto.split('R$')[1].replace(',', '.')); // Converte para número decimal
    let quantidade = parseInt(document.getElementById('quantidade').value); // Converte para número inteiro

    // Calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    // Adicionar no carrinho
    if (quantidade > 0) {
        carrinho.innerHTML += `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>
        </section>`;

        // Atualizar o valor total
        totalGeral += preco;
        let campoTotal = document.getElementById('valor-total'); 
        campoTotal.textContent = `R$ ${totalGeral.toFixed(2)}`;

        // Limpar campo de quantidade
        document.getElementById('quantidade').value = '';
    }
}

function limpar() {
    totalGeral = 0; // Atualiza totalGeral globalmente
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
