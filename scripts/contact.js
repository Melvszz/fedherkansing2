// JavaScript Document


/* de select en het formulier opzoeken */
const deKeuzeSelect = document.querySelector("#keuze");
const hetFormulier = document.querySelector("form");


/* een fucntie om de waarde van de select aan het formulier toe te voegen */
/* de waarde wordt opgeslagen in een data-attribuut */
/* die kan vervolgens in css gebruikt worden */
/* https://css-tricks.com/a-complete-guide-to-data-attributes/ */
function setKeuze() {
	deHuidigeKeuze = deKeuzeSelect.value;
	hetFormulier.dataset.keuze = deHuidigeKeuze;
}


/* indien de waarde van de select wordt veranderd */
/* wordt de fucntie aangeroepen */
deKeuzeSelect.addEventListener("change", setKeuze);


/* na het laden van de pagina */
/* wordt de fucntie ook eenmalig aangeroepen */
setKeuze();