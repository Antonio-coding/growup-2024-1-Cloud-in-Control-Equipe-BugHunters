function HeaderComponent() {
    const header = document.createElement('header');
    header.classList.add('header_section');

    // Create the navbar element
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'custom_nav-container');

    // Create the brand element
    const brand = document.createElement('a');
    brand.classList.add('navbar-brand');
    brand.href = 'index.html';
    const brandSpan = document.createElement('span');
    brandSpan.textContent = 'BugHunters';
    brand.appendChild(brandSpan);

    // Create the toggler button
    const toggler = document.createElement('button');
    toggler.classList.add('navbar-toggler');
    toggler.setAttribute('type', 'button');
    toggler.setAttribute('data-toggle', 'collapse');
    toggler.setAttribute('data-target', '#navbarSupportedContent');
    toggler.setAttribute('aria-controls', 'navbarSupportedContent');
    toggler.setAttribute('aria-expanded', 'false');
    toggler.setAttribute('aria-label', 'Toggle navigation');
    const togglerSpan = document.createElement('span');
    toggler.appendChild(togglerSpan);

    // Create the collapsing navbar content
    const collapse = document.createElement('div');
    collapse.classList.add('collapse', 'navbar-collapse');
    collapse.id = 'navbarSupportedContent';

    // Create the navigation list
    const navList = document.createElement('ul');
    navList.classList.add('navbar-nav');

    // Create navigation items (adapt links and text as needed)
    const navItems = [
        { text: 'Home', link: 'index.html', active: true },
        { text: 'Shop', link: 'shop.html' },
        { text: 'Why Us', link: 'why.html' },
        { text: 'Testimonial', link: 'testimonial.html' },
        { text: 'Contact Us', link: 'contact.html' }
    ];

    for (const item of navItems) {
        const navItem = document.createElement('li');
        navItem.classList.add('nav-item');
        if (item.active) {
            navItem.classList.add('active');
        }
        const navLink = document.createElement('a');
        navLink.classList.add('nav-link');
        navLink.href = item.link;
        navLink.textContent = item.text;
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    }

    // Create the user option section
    const userOption = document.createElement('div');
    userOption.classList.add('user_option');

    // Add login link (replace with actual link)
    const loginLink = document.createElement('a');
    loginLink.href = '';
    const loginIcon = document.createElement('i');
    loginIcon.classList.add('fa', 'fa-user');
    loginLink.appendChild(loginIcon);
    const loginText = document.createElement('span');
    loginText.textContent = 'Login';
    loginLink.appendChild(loginText);
    userOption.appendChild(loginLink);

    // Add shopping cart icon (replace with actual link/functionality)
    const cartLink = document.createElement('a');
    cartLink.href = '';
    const cartIcon = document.createElement('i');
    cartIcon.classList.add('fa', 'fa-shopping-bag');
    cartLink.appendChild(cartIcon);
    userOption.appendChild(cartLink);

    // Create the search form
    const searchForm = document.createElement('form');
    searchForm.classList.add('form-inline');
    const searchButton = document.createElement('button');
    searchButton.classList.add('btn', 'nav_search-btn');
    searchButton.type = 'submit';
    const searchIcon = document.createElement('i');
    searchIcon.classList.add('fa', 'fa-search');
    searchButton.appendChild(searchIcon);
    searchForm.appendChild(searchButton);

    // Assemble the elements
    collapse.appendChild(navList);
    collapse.appendChild(userOption);
    navbar.appendChild(brand);
    navbar.appendChild(toggler);
    navbar.appendChild(collapse);
    header.appendChild(navbar);
    header.appendChild(searchForm);

    return header;
}

