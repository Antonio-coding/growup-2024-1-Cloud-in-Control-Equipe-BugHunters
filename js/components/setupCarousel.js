function setupCarousel() {
    // Array com os conteúdos dos itens do carrossel
    const carouselItems = [
        CarouselItemComponent(),
        CarouselItemComponent(),
        CarouselItemComponent()
    ];

    // Obter o elemento do carousel-inner
    const carouselInner = document.getElementById('carouselInner');

    // Adicionar os itens do carrossel ao carousel-inner
    carouselItems.forEach(item => {
        carouselInner.appendChild(item);
    });

    // Ativar o carrossel utilizando o Bootstrap
    $('#carouselExampleIndicators').carousel();

    // Adicionar manipuladores de eventos aos elementos de controle do carrossel
    const prevBtn = document.querySelector('.carousel-control-prev');
    const nextBtn = document.querySelector('.carousel-control-next');

    prevBtn.addEventListener('click', function () {
        $('#carouselExampleIndicators').carousel('prev');
    });

    nextBtn.addEventListener('click', function () {
        $('#carouselExampleIndicators').carousel('next');
    });
}

// Chamar a função para configurar o carrossel ao carregar a página
document.addEventListener('DOMContentLoaded', setupCarousel);

