function loadCarouselItems() {
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
}

// Chamar a função para carregar os itens do carrossel ao carregar a página
document.addEventListener('DOMContentLoaded', loadCarouselItems);
