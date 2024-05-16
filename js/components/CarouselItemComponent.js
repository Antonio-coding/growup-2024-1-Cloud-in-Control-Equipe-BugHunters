function CarouselItemComponent() {
    // Create the carousel item element
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item', 'active');

    // Create the container
    const container = document.createElement('div');
    container.classList.add('container-fluid');

    // Create the row
    const row = document.createElement('div');
    row.classList.add('row');

    // Create the column for text
    const colText = document.createElement('div');
    colText.classList.add('col-md-7');

    // Create the detail box
    const detailBox = document.createElement('div');
    detailBox.classList.add('detail-box');
    const h1 = document.createElement('h1');
    h1.innerHTML = `
        Welcome To Our <br>
        Gift Shop
    `;
    const p = document.createElement('p');
    p.textContent = `Sequi perspiciatis nulla reiciendis, rem, tenetur impedit, eveniet non necessitatibus error
                        distinctio mollitia suscipit. Nostrum fugit doloribus consequatur distinctio esse, possimus
                        maiores aliquid repellat beatae cum, perspiciatis enim, accusantium perferendis.`;
    const a = document.createElement('a');
    a.href = '#'; // Add your link here
    a.textContent = 'Contact Us';

    detailBox.appendChild(h1);
    detailBox.appendChild(p);
    detailBox.appendChild(a);

    colText.appendChild(detailBox);

    // Create the column for image
    const colImg = document.createElement('div');
    colImg.classList.add('col-md-5');

    // Create the img box
    const imgBox = document.createElement('div');
    imgBox.classList.add('img-box');
    const img = document.createElement('img');
    img.src = 'images/slider-img.png'; // Add your image source here
    img.alt = ''; // Add your image alt text here

    imgBox.appendChild(img);
    colImg.appendChild(imgBox);

    // Assemble the elements
    row.appendChild(colText);
    row.appendChild(colImg);
    container.appendChild(row);
    carouselItem.appendChild(container);

    return carouselItem;
}

