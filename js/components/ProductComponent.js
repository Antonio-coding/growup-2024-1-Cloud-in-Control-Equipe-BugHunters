function ProductComponent(imgSrc, name, price) {
    const productBox = document.createElement('div');
    productBox.classList.add('col-sm-6', 'col-md-4', 'col-lg-3');

    const box = document.createElement('div');
    box.classList.add('box');

    const link = document.createElement('a');
    link.href = ''; // Adicione o link correto para cada produto

    const imgBox = document.createElement('div');
    imgBox.classList.add('img-box');
    const img = document.createElement('img');
    img.src = imgSrc; // O caminho da imagem deve ser passado como argumento
    img.alt = ''; // Adicione um texto alternativo para a imagem se necessário
    imgBox.appendChild(img);

    const detailBox = document.createElement('div');
    detailBox.classList.add('detail-box');
    const productName = document.createElement('h6');
    productName.textContent = name; // Nome do produto
    const priceInfo = document.createElement('h6');
    priceInfo.textContent = 'Price';
    const priceSpan = document.createElement('span');
    priceSpan.textContent = price; // Preço do produto
    priceInfo.appendChild(priceSpan);
    detailBox.appendChild(productName);
    detailBox.appendChild(priceInfo);

    const newTag = document.createElement('div');
    newTag.classList.add('new');
    const newSpan = document.createElement('span');
    newSpan.textContent = 'New';
    newTag.appendChild(newSpan);

    link.appendChild(imgBox);
    link.appendChild(detailBox);
    link.appendChild(newTag);

    box.appendChild(link);

    productBox.appendChild(box);

    return productBox;
}

// Exemplo de uso do componente
const productsContainer = document.getElementById('productsContainer'); // Elemento onde os produtos serão adicionados

// Adicione os produtos usando o componente
productsContainer.appendChild(ProductComponent('images/p1.png', 'Ring', '$200'));
productsContainer.appendChild(ProductComponent('images/p2.png', 'Watch', '$300'));
productsContainer.appendChild(ProductComponent('images/p3.png', 'Teddy Bear', '$110'));
productsContainer.appendChild(ProductComponent('images/p4.png', 'Flower Bouquet', '$45'));
productsContainer.appendChild(ProductComponent('images/p5.png', 'Teddy Bear', '$95'));
productsContainer.appendChild(ProductComponent('images/p6.png', 'Flower Bouquet', '$70'));
productsContainer.appendChild(ProductComponent('images/p7.png', 'Watch', '$400'));
productsContainer.appendChild(ProductComponent('images/p8.png', 'Ring', '$450'));
