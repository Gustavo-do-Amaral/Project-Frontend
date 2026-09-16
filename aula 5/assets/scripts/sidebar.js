var etapas = [
    { label: "Fato Ocorrido", href: "fato.html" },
    { label: "Confirmação", href: "confirmar_fato.html" },
    { label: "Data e Hora do Fato", href: "data.html" },
    { label: "Local do Fato", href: "local.html" },
    { label: "Resumo", href: "resumoBO.html" }
];

function montarSidebar(etapaAtual) {
    var sidebar = document.getElementById("sidebar");

    if (!sidebar) {
        return;
    }

    var html = "<div class='sidebar-titulo'>Etapas do Registro</div>";

    for (var i = 0; i < etapas.length; i++) {
        var numero = i + 1;
        var conteudo = "<span class='etapa-numero'>" + numero + "</span>" + etapas[i].label;

        if (numero < etapaAtual) {
            html += "<div class='etapa-concluida'><a href='" + etapas[i].href + "'>" + conteudo + "</a></div>";
        } else if (numero === etapaAtual) {
            html += "<div class='etapa-atual'>" + conteudo + "</div>";
        } else {
            html += "<div class='etapa-futura'>" + conteudo + "</div>";
        }
    }

    sidebar.innerHTML = html;
}
