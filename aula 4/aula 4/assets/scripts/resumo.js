const carregarEndereco = function () {
    let endereco = JSON.parse(
        sessionStorage.getItem('endereco')
    );
    document.getElementById('rua').innerText = endereco.rua;
    document.getElementById('cidade').innerText = endereco.cidade;
    document.getElementById('estado').innerText = endereco.estado;
    document.getElementById('cep').innerText = endereco.cep;
}

carregarEndereco();

const carregarProdutos = function () {
    let produtos = JSON.parse(
        sessionStorage.getItem('produtos')
    );
    document.getElementById('hav_produto').innerText = produtos.hav_produto;
    document.getElementById('hav_quantidade').innerText = produtos.hav_quantidade;
    document.getElementById('hav_preco').innerText = produtos.hav_preco;
    document.getElementById('alp_produto').innerText = produtos.alp_produto;
    document.getElementById('alp_quantidade').innerText = produtos.alp_quantidade;
    document.getElementById('alp_preco').innerText = produtos.alp_preco;
}

carregarProdutos();