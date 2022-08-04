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


//#endregion


//#region Eventi

/* Aggiungo l'evento al mio menu mobile */
menu.addEventListener('click', function() {
    /* attivo la classe toggle per abilitare il menu */
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})


//#endregion