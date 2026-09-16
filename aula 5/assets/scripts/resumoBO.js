const carregarLocal = function () {
    const local = JSON.parse(sessionStorage.getItem('local'));

    if (!local) {
        return;
    }

    document.getElementById('rua').innerText = local.rua || '';
    document.getElementById('cidade').innerText = local.cidade || '';
    document.getElementById('estado').innerText = local.estado || '';
    document.getElementById('cep').innerText = local.cep || '';
};

const carregarFato = function () {
    const fato = JSON.parse(sessionStorage.getItem('fato'));

    if (!fato) {
        return;
    }

    document.getElementById('fato').innerText = fato.fato || '';
    document.getElementById('descricao').innerText = fato.descricao || '';
};

const carregarData = function () {
    const data = JSON.parse(sessionStorage.getItem('data'));

    if (!data) {
        return;
    }

    document.getElementById('dia').innerText = data.dia || '';
    document.getElementById('hora').innerText = data.hora || '';
};

carregarLocal();
carregarFato();
carregarData();