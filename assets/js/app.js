//#region Variabili

/* Seleziono il mio menu mobile  */
const menu = document.querySelector("#mobile-menu")
/* Seleziono la mia lista non ordinata con tutti i list item */
const menuLinks = document.querySelector(".navbar_menu")
/* Verifica in console */
console.log(menu, menuLinks);

/* Seleziono il wrapper delle mie cards */
const services = document.querySelector(".services_container")
/* Verifica in console */
console.log(services);

/* Seleziono il wrapper delle mie icone */
const icons = document.querySelector(".social_icons")
/* Verifica in console */
console.log(icons);

/* Seleziono il mio Wrapper principale */
const firstFooterLinks = document.getElementById("first_sections")
/* Verifica in console */
console.log(firstFooterLinks);

/* Creazione di navbar di oggetto */
const navbarLinks = [
    /* Link Home */
    {
        href : '/',
        name : 'Home'
    },
    /* Link Tech */
    {
        href : '/tech.html',
        name : 'Tech'
    },
    /* Link Products */
    {
        href : '/',
        name : 'Products'
    },
]
console.log(navbarLinks);

/* Creazione dei dati dinamici delle cards */
const servicesCardsData = [
    /* 1°Card */
    {
        h2 : 'Experience Bliss',
        p : 'Ai Powered Technology',
        btn : 'Get Started'
    },
    /* 2°Card */
    {
        h2 : 'Are you Ready?',
        p : 'Take the Leap',
        btn : 'Get Started'
    }
]
console.log(servicesCardsData);

/* Creazione dati dinamici per le mie icone */
const iconsLinks = [
    /* 1°icona */
    {
        ref : '/',
        class : 'social_icon-link',
        target : '_blank',
        icon: 'fab fa-facebook'
    },
    /* 2°icona */
    {
        ref : '/',
        class : 'social_icon-link',
        target : '_blank',
        icon: 'fab fa-instagram'
    },   
    /* 3°icona */
    {
        ref : '/',
        class : 'social_icon-link',
        target : '_blank',
        icon: 'fab fa-twitter'
    }, 
    /* 4°icona */
    {
        ref : '/',
        class : 'social_icon-link',
        target : '_blank',
        icon: 'fab fa-youtube'
    },  
    /* 5°icona */
    {
        ref : '/',
        class : 'social_icon-link',
        target : '_blank',
        icon: 'fab fa-linkedin'
    }      
]
console.log(iconsLinks);

/* Prima sezione del Footer */

const firstSections = [
    {
        ref: '/',
        name: 'How it works',
    },
    {
        ref: '/',
        name: 'Testimonials',
    },
    {
        ref: '/',
        name: 'Careers',
    },
    {
        ref: '/',
        name: 'Investments',
    },
    {
        ref: '/',
        name: 'Terms of Service',
    },               
]
console.log(firstSections);

//#endregion


//#region Cicli

/* Avvio il ciclo ForEach per la Navbar dinamica */
navbarLinks.forEach(element => {
    let navbarLink = 
    `<li class="navbar_item">
        <a href="${element.href}" class="navbar_links">${element.name}</a>
    </li> 
    `
    menuLinks.insertAdjacentHTML('afterbegin', navbarLink)
})

servicesCardsData.forEach(element => {
    console.log(element); // Verifica del mio oggetto
    /* Creo la mia singola card dinamica */
    let singleCard = 
    `
    <div class="services_card">
        <h2>${element.h2}</h2>
        <p>${element.p}</p>
        <button>${element.btn}</button>
    </div>   
    `
    services.insertAdjacentHTML('beforeend', singleCard)
})

iconsLinks.forEach(element => {
    console.log(element); // Verifica del mio oggetto
    /* Creo la mia singola icona dinamica */
    let singleIcon = 
    `
    <a href="${element.ref}" class="${element.class}" target="${element.target}">
        <i class="${element.icon}"></i>
    </a>
    `
    icons.insertAdjacentHTML('beforeend', singleIcon)
})


firstSections.forEach(element => {
    console.log(element);
    /* Singolo Ancor Tag */
    let singleLink = `<a href="${element.ref}">${element.name}</a>`
    firstFooterLinks.insertAdjacentHTML('beforeend', singleLink)
})



//#endregion


//#region Eventi

/* Aggiungo l'evento al mio menu mobile */
menu.addEventListener('click', function() {
    /* attivo la classe toggle per abilitare il menu */
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})


//#endregion