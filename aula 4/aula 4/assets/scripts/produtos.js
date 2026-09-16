const precos = {
    hav: 50.00,
    alp: 75.00
};

const atualizarPreco = function (produto) {
   
    let quantidade = parseInt(
     document.getElementById(produto + "_quantidade").value
    );

    let precoTotal = quantidade * precos[produto];

    document.getElementById(produto + "_preco").innerText =
       `R$ ${precoTotal}`;

}

const salvarProdutos = function () {
    const produtos = {        
        hav_produto: "Havaianas",
        hav_quantidade: document.getElementById("hav_quantidade").value,
        hav_preco: document.getElementById("hav_preco").innerText,
        alp_produto: "Alpargatas",
        alp_quantidade: document.getElementById("alp_quantidade").value,
        alp_preco: document.getElementById("alp_preco").innerText
    }
    sessionStorage.setItem("produtos",
        JSON.stringify(produtos)
    );
}