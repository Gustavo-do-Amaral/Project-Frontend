function salvarData() {
    const dia = document.getElementById('dia').value;
    const hora = document.getElementById('hora').value;

    const data = {
        dia: dia,
        hora: hora
    };

    sessionStorage.setItem('data', JSON.stringify(data));

    console.log('Data salva:', data);
}

function carregarData() { const dados = sessionStorage.getItem('data'); 
    if (dados) { 
        const data = JSON.parse(dados); 
        const text = `Data: ${data.dia} Hora: ${data.hora}`; 

    //console.log(text);
    console.log(sessionStorage.getItem('data')); 
    } 
}