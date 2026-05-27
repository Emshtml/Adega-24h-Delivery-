/*
Copyright (c) 2026 Thereza Candida / Emshtml

Todos os direitos reservados.
*/

let carrinho = [];

function addCarrinho(nome, preco) {

    carrinho.push({
        nome,
        preco
    });

    atualizarCarrinho();
}

function atualizarCarrinho() {

    const cartItems = document.getElementById("cart-items");

    const cartCount = document.getElementById("cart-count");

    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    carrinho.forEach(item => {

        total += item.preco;

        cartItems.innerHTML += `
            <div class="item-cart">
                <p>${item.nome}</p>
                <span>R$ ${item.preco.toFixed(2)}</span>
            </div>
        `;
    });

    cartCount.innerText = carrinho.length;

    cartTotal.innerText = total.toFixed(2);
}

function abrirCarrinho() {

    document.getElementById("cart-modal").style.display = "flex";
}

function fecharCarrinho() {

    document.getElementById("cart-modal").style.display = "none";
}

function finalizarPedido() {

    const endereco = document.getElementById("endereco").value;

    const pagamento = document.getElementById("pagamento").value;

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio.");

        return;
    }

    if (endereco === "") {

        alert("Digite seu endereço.");

        return;
    }

    let mensagem = "🍻 *NOVO PEDIDO - ADEGA 24H* %0A%0A";

    carrinho.forEach(item => {

        mensagem += `• ${item.nome} - R$ ${item.preco.toFixed(2)} %0A`;
    });

    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

    mensagem += `%0A🛒 Itens: ${carrinho.length}`;
    mensagem += `%0A💰 Total: R$ ${total.toFixed(2)}`;
    mensagem += `%0A📍 Endereço: ${endereco}`;
    mensagem += `%0A💳 Pagamento: ${pagamento}`;

    const telefone = "5511976794749";

    const url = `https://wa.me/${telefone}?text=${mensagem}`;

    window.open(url, "_blank");
}
