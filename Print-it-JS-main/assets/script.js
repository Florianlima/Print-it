const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/* initialisation variable currentIndex a 0*/
let currentIndex = 0

/* récupération de la class Arrow dans l'ID #banner */
const arrowLeft = document.querySelector("#banner .arrow_left");
const arrowRight = document.querySelector("#banner .arrow_right");


/* initialisation constante avec valeur du nombre d éléments dans tableau slides */
const nbSlides = slides.length;


/*création des Dots + ajout CSS*/
const divDots = document.getElementById("dots");
for (let i = 0; i < nbSlides; i++)/** initialise la boucle qui itère de 0 a Nbslides -1 */ {
	const dot = document.createElement('span');/** crée un nouvel élément span pour chaque itération */
	dot.classList.add('dot');/** ajoute la class dot à chaque élément span crée */
	if (i == 0) {
		dot.classList.add('dot_selected');/**ajoute la class au premier point (index 0)pour le marquer comme sélectionné */
	}
	divDots.appendChild(dot);/**ajoute chaque point créé au conteneur divdots */
}

const dots = document.querySelectorAll('.dot');/** prend tous les éléments avec la class dot et les stocke dans la constante dots */

/* recupération de la class .banner-img et P dans l'ID #banner*/
const imageElement = document.querySelector("#banner .banner-img");
const textElement = document.querySelector("#banner p");

/*En fonction de l'index fourni l'image,txt,dots se mettent à jour*/
function updateCarousel(index) {

	if (index >= 0 && index < slides.length)/** verif si lindex fourni est valide */ {

		imageElement.src = './assets/images/slideshow/' + slides[index].image;/** met a jour la srce img correspondant a l'index */
		textElement.innerHTML = slides[index].tagLine;/*maj dynamique du contenu HTML du txt pour affiché la légende tagline */


		dots.forEach(dot => dot.classList.remove('dot_selected'));/**supprime la class de tous les points pour les déselectionner */
		dots[index].classList.add('dot_selected');/** Ajoute la classe au points correspondant a l'index marqué comme selectionné */
	} else {
		console.error("Index hors limites : ", index);
	}
}

/*Ajout ecouteur d'événement*/
arrowLeft.addEventListener('click', function () {
	/*modulo garantit que currentIndex reste dans les limites valides '0 à nbslides -1' (slide infini)*/
	currentIndex = (currentIndex - 1 + nbSlides) % nbSlides;
	updateCarousel(currentIndex);/** cela met a jour l'img, txt et dots */
});

arrowRight.addEventListener('click', function () {
	currentIndex = (currentIndex + 1 ) % nbSlides;
	updateCarousel(currentIndex);
});