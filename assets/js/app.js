//#region Variabili

/* Seleziono il mio menu mobile  */
const menu = document.querySelector("#mobile-menu")
/* Seleziono la mia lista non ordinata con tutti i list item */
const menuLinks = document.querySelector(".navbar_menu")
/* Verifica in console */
/* console.log(menu, menuLinks); */

/* Seleziono il wrapper delle mie cards */
const services = document.querySelector(".services_container")
/* Verifica in console */
/* console.log(services); */

/* Seleziono il wrapper delle mie icone */
const icons = document.querySelector(".social_icons")
/* Verifica in console */
/* console.log(icons); */

/* Seleziono il mio Wrapper dei link footer principale */
const firstFooterLinks = document.getElementById("first_sections")
const secondFooterLinks = document.getElementById("second_sections")
const thirdFooterLinks = document.getElementById("third_sections")
const fourthFooterLinks = document.getElementById("fourth_sections")
/* Verifica in console */
/* console.log(firstFooterLinks, secondFooterLinks, thirdFooterLinks, fourthFooterLinks); */

const firstFooterTitle = `<h2>About Us</h2>`
const secondFooterTitle = `<h2>Contact Us</h2>`
const thirdFooterTitle = `<h2>Videos</h2>`
const fourthFooterTitle = `<h2>Social Media</h2>`
console.log(firstFooterTitle, secondFooterTitle, thirdFooterTitle, fourthFooterTitle);

/* Appendo i miei titoli dinamici */
firstFooterLinks.insertAdjacentHTML('afterbegin', firstFooterTitle)
secondFooterLinks.insertAdjacentHTML('afterbegin', secondFooterTitle)
thirdFooterLinks.insertAdjacentHTML('afterbegin', thirdFooterTitle)
fourthFooterLinks.insertAdjacentHTML('afterbegin', fourthFooterTitle)



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
/* console.log(navbarLinks); */

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
/* console.log(servicesCardsData); */

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
/* console.log(iconsLinks); */

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
/* console.log(firstSections); */

/* Seconda sezione del Footer */
const secondSections = [
    {
        ref: '/',
        name: 'Support',
    },
    {
        ref: '/',
        name: 'Destinations',
    },
    {
        ref: '/',
        name: 'Sponsorships',
    },            
]
/* console.log(secondSections); */

/* Terza sezione del Footer */
const thirdSections = [
    {
        ref: '/',
        name: 'Submit Video',
    },
    {
        ref: '/',
        name: 'Ambassadors',
    },
    {
        ref: '/',
        name: 'Agency',
    },    
    {
        ref: '/',
        name: 'Influencer',
    },             
]
/* console.log(thirdSections); */

/* Quarta sezione del Footer */
const fourthSections = [
    {
        ref: '/',
        name: 'Instagram',
    },
    {
        ref: '/',
        name: 'Facebook',
    },
    {
        ref: '/',
        name: 'Youtube',
    },    
    {
        ref: '/',
        name: 'Twitter',
    },             
]
/* console.log(fourthSections); */

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

/* Avvio ciclo per le cards dinamiche */
servicesCardsData.forEach(element => {
    /* console.log(element); */ // Verifica del mio oggetto
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

/* Avvio ciclo per le icone social dinamiche */
iconsLinks.forEach(element => {
    /* console.log(element); */ // Verifica del mio oggetto
    /* Creo la mia singola icona dinamica */
    let singleIcon = 
    `
    <a href="${element.ref}" class="${element.class}" target="${element.target}">
        <i class="${element.icon}"></i>
    </a>
    `
    icons.insertAdjacentHTML('beforeend', singleIcon)
})

/* Avvio ciclo per la prima sezione dinamica del footer */
firstSections.forEach(element => {
/*     console.log(element); */
    /* Singolo Ancor Tag */
    let singleLink = `<a href="${element.ref}">${element.name}</a>`
    firstFooterLinks.insertAdjacentHTML('beforeend', singleLink)
})

/* Avvio ciclo per la seconda sezione dinamica del footer */
secondSections.forEach(element => {
/*     console.log(element); */
    /* Singolo Ancor Tag */
    let singleLink = `<a href="${element.ref}">${element.name}</a>`
    secondFooterLinks.insertAdjacentHTML('beforeend', singleLink)
})

/* Avvio ciclo per la terza sezione dinamica del footer */
thirdSections.forEach(element => {
/*     console.log(element); */
    /* Singolo Ancor Tag */
    let singleLink = `<a href="${element.ref}">${element.name}</a>`
    thirdFooterLinks.insertAdjacentHTML('beforeend', singleLink)
})

/* Avvio ciclo per la terza sezione dinamica del footer */
fourthSections.forEach(element => {
/*     console.log(element); */
    /* Singolo Ancor Tag */
    let singleLink = `<a href="${element.ref}">${element.name}</a>`
    fourthFooterLinks.insertAdjacentHTML('beforeend', singleLink)
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