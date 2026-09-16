function salvarFato(id) {
    const fatoSelecionado = document.getElementById(id);

    if (!fatoSelecionado || !fatoSelecionado.checked) {
        return;
    }

    const linha = fatoSelecionado.closest('tr');
    const fato = {
        fato: linha ? linha.cells[0].innerText.trim() : fatoSelecionado.id,
        descricao: linha ? linha.cells[1].innerText.trim() : ''
    };

    sessionStorage.setItem('fato', JSON.stringify(fato));
    console.log('Fato selecionado:', fato);
}

function salvarFatos() {
    const fatoSelecionado = document.querySelector('input[name="fato"]:checked');

    if (!fatoSelecionado) {
        return false;
    }

    salvarFato(fatoSelecionado.id);
    return true;
}

const carregarFato = function () {
    const fatoSalvo = JSON.parse(sessionStorage.getItem('fato'));

    if (!fatoSalvo) {
        return;
    }

    console.log(`Fato ${fatoSalvo.fato} - Descricao ${fatoSalvo.descricao}`);
}