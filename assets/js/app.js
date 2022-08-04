//#region Variabili

/* Seleziono il mio menu mobile  */
const menu = document.querySelector("#mobile-menu")
/* Seleziono la mia lista non ordinata con tutti i list item */
const menuLinks = document.querySelector(".navbar_menu")

/* Verifica in console */
console.log(menu, menuLinks);

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




//#endregion

//#region Funzioni

//#endregion

//#region Cicli

/* Avvio il ciclo ForEach per la Navbar dinamica */
navbarLinks.forEach(element => {
    /* console.log(`${key} : ${element[key]}`); */
    let navbarLink = 
    `<li class="navbar_item">
        <a href="${element.href}" class="navbar_links">${element.name}</a>
    </li> 
    `
    menuLinks.insertAdjacentHTML('afterbegin', navbarLink)
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