function ContactInfoComponent() {
    const contactBox = document.createElement('div');

    const sections = [
        { icon: 'map-marker', text: 'Gb road 123 london Uk', href: '#' }, // Adicione o link correto aqui
        { icon: 'phone', text: '+01 12345678901', href: '#' }, // Adicione o link correto aqui
        { icon: 'envelope', text: 'demo@gmail.com', href: '#' } // Adicione o link correto aqui
    ];

    sections.forEach(section => {
        const link = document.createElement('a');
        link.href = section.href;
        const iconElement = document.createElement('i');
        iconElement.classList.add('fa', `fa-${section.icon}`);
        const spanText = document.createElement('span');
        spanText.textContent = section.text;
        link.appendChild(iconElement);
        link.appendChild(spanText);
        contactBox.appendChild(link);
    });

    return contactBox;
}

