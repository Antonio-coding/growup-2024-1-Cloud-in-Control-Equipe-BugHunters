function NewsletterFormComponent() {
    const formContainer = document.createElement('div');
    formContainer.classList.add('info_form');

    const title = document.createElement('h5');
    title.textContent = 'Newsletter';

    const form = document.createElement('form');
    form.action = '#'; // Adicione a ação correta aqui

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Enter your email';

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Subscribe';

    form.appendChild(emailInput);
    form.appendChild(submitButton);

    formContainer.appendChild(title);
    formContainer.appendChild(form);

    return formContainer;
}

