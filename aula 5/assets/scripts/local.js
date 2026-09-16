function salvarLocal () {
    let local = {
        rua:document.getElementById('rua').value,
        cidade:document.getElementById('cidade').value,
        estado:document.getElementById('estado').value,
        cep: document.getElementById('cep').value
    };
    sessionStorage.setItem('local',
        JSON.stringify(local)
    );
}
const carregarLocal = function () {
    let rua = sessionStorage.getItem('rua');
    let cidade = sessionStorage.getItem('cidade');
    let estado = sessionStorage.getItem('estado');
    let cep = sessionStorage.getItem('cep');

    let local = `Rua ${rua}
    \nCidade ${cidade}
    \nEstado ${estado}
    \nCEP ${cep}`;
    
    console.log(local);
}