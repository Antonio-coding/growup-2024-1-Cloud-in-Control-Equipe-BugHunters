function SocialBoxComponent() {
    const socialBox = document.createElement('div');
    socialBox.classList.add('social_box');

    const socialIcons = ['facebook', 'twitter', 'instagram', 'youtube'];
    socialIcons.forEach(icon => {
        const link = document.createElement('a');
        link.href = '#'; // Adicione o link correto aqui
        const iconElement = document.createElement('i');
        iconElement.classList.add('fa', `fa-${icon}`);
        link.appendChild(iconElement);
        socialBox.appendChild(link);
    });

    return socialBox;
}
