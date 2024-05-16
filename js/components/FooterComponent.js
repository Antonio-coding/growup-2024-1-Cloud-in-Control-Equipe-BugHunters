function FooterComponent() {
    const footer = document.createElement('footer');
    footer.classList.add('footer_section');

    const container = document.createElement('div');
    container.classList.add('container');

    const paragraph = document.createElement('p');
    const spanYear = document.createElement('span');
    spanYear.id = 'displayYear';
    paragraph.innerHTML = `&copy; <span id="displayYear"></span> All Rights Reserved By <a href="https://html.design/">Free Html Templates</a>`;

    container.appendChild(paragraph);
    footer.appendChild(container);

    return footer;
}

