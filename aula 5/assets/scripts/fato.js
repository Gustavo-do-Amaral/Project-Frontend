function salvarFato(id) { const fatoSelecionado = document.getElementById(id); 
    if (fatoSelecionado.checked) { sessionStorage.setItem('fato', id); 
        console.log('Fato selecionado:', id); 
    } 
}
const carregarFato = function () {
    let fatos = sessionStorage.getItem('fatos');
    let descricao = sessionStorage.getItem('descrição');
    let escolha = sessionStorage.getItem('escolha');

    let fato = `Fato ${fatos}
     Descricao ${descricao}
     Escolha ${escolha}`;
  
    
    console.log(fato);

}