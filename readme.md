# Progetto Javascript Next Gen

Progetto di una landing page completamente dinamica. La pagina è stata creata tramite :

- HTML
- CSS
- JAVASCRIPT

## **Logo**

Il `logo` è stato inserito nel markup dinamicamente, tramite l'utilizzo di array e cicli di Javascript (forEach).

```js
/* Loghi del footer e della Navbar */
navbarLogo = document.querySelector(".navbar_container")
footerLogo = document.querySelector(".social_media-wrap")


/* Creaazione di oggetto per il logo per il footer */
const logoFooter = [
    {
        icon : 'fa-solid fa-gem',
        ref : '/',
        id : 'footer_logo'
    }
]
/* Logo per la navbar */
const logoNavbar = [
    {
        icon : 'fa-solid fa-gem',
        ref : '/',
        id : 'navbar_logo'
    }
]

/* Ciclo per Logo Navbar dinamico */
logoNavbar.forEach(element => {
    let logo = 
    `
    <a href="${element.ref}" id="${element.id}">
        <i class="${element.icon}"></i>NEXT
    </a>
    `
    navbarLogo.insertAdjacentHTML('afterbegin', logo)
})

/* Ciclo per Logo Footer dinamico */
logoFooter.forEach(element => {
    let logo = 
    `
    <a href="${element.ref}" id="${element.id}">
        <i class="${element.icon}"></i>NEXT
    </a>
    `
    footerLogo.insertAdjacentHTML('afterbegin', logo)
})
```

## **Cards**

Le `cards` sono state inserite markup dinamicamente, tramite l'utilizzo di array e cicli di Javascript (forEach).

```js
/* Seleziono il wrapper delle mie cards */
const services = document.querySelector(".services_container")

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
```

## **Footer Links**

Anche le varie voci del footer sono state inserite dinamicamente nel markup, sempre tramite ciclo forEach.

## **Navbar Links**

Anche le varie voci della navbar sono state inserite dinamicamente nel markup, sempre tramite ciclo forEach.

![Logo](https://hiringplatform.boolean.careers/images/logo.png)