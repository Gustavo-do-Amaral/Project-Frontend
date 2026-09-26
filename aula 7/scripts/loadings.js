const loadNavbar = () => {
   fetch('../navbar.html')
     .then(response => response.text())
     .then(data => 
        document.getElementById('navbar-mainpage').innerHTML = data
     );
}
const loadCarousel = () => {
   fetch('../carousel.html')
     .then(response => response.text())
     .then(data => 
        document.getElementById('carousel-mainpage').innerHTML = data
     );
}
const loadMinicards = () => {
   fetch('../minicards.html')
     .then(response => response.text())
     .then(data => {
        let allMinicards = '';
        for(let i =0; i<5; i++){
           allMinicards += data;
        }
        document.getElementById('minicards-mainpage').innerHTML = allMinicards;
     });
}

const loadProdutos = () => {
   fetch('../produtos.html')
     .then(response => response.text())
     .then(data => {
        let allProdutos = '';
        for(let i =0; i<2; i++){
            for(let i =0; i<3; i++){
               allProdutos += data;
            }
            allProdutos += "<br>"
        }
        document.getElementById('produtos-mainpage').innerHTML = allProdutos;
     });
}

document.addEventListener('DOMContentLoaded', loadNavbar);
document.addEventListener('DOMContentLoaded', loadCarousel);
document.addEventListener('DOMContentLoaded', loadMinicards);
document.addEventListener('DOMContentLoaded', loadProdutos);