var request = new XMLHttpRequest();

// Configuração da requisição utilizando uma API fictícia
request.open("GET", "https://api.exemplo-ecommerce.com/produtos/destaques", true);

// Monitoramento da requisição
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        var dados = JSON.parse(request.responseText);
        console.log("Produtos recebidos:", dados);
    }
};

// Envio da requisição
request.send();
