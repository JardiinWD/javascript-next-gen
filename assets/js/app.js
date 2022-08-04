//#region Variabili

/* Seleziono il mio menu mobile  */
const menu = document.querySelector("#mobile-menu")
/* Seleziono la mia lista non ordinata con tutti i list item */
const menuLinks = document.querySelector(".navbar_menu")

/* Verifica in console */
console.log(menu, menuLinks);

//#endregion

//#region Funzioni

//#endregion

//#region Eventi

/* Aggiungo l'evento al mio menu mobile */
menu.addEventListener('click', function() {
    /* attivo la classe toggle per abilitare il menu */
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})



//#endregion