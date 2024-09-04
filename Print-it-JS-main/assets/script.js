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
/* initialisation variable a 0*/
let currentIndex = 0

/* récupération de la class Arrow dans l'ID #banner */ 
const arrowLeft = document.querySelector("#banner .arrow_left");
const arrowRight = document.querySelector("#banner .arrow_right");


/* initialisation constante avec valeur du nombre d éléments dans tableau slides */ 
const nbSlides = slides.length;


/*création des Dots + ajout CSS*/
const divDots = document.getElementById("dots");
for (let i = 0; i < nbSlides; i++) {
	const dot = document.createElement('span');
	dot.classList.add('dot');
	if (i == 0) {
		dot.classList.add('dot_selected');
	}
	divDots.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

/* recupération de la class .banner-img et P dans l'ID #banner*/ 
const imageElement = document.querySelector("#banner .banner-img");
const textElement = document.querySelector("#banner p");

/*En fonction de l'index fourni l'image,txt,dots se mettent à jour*/ 
function updateCarousel(index) {

	if (index >= 0 && index < slides.length) {

		imageElement.src = './assets/images/slideshow/' + slides[index].image;
		textElement.innerHTML = slides[index].tagLine;


		dots.forEach(dot => dot.classList.remove('dot_selected'));
		dots[index].classList.add('dot_selected');
	} else {
		console.error("Index hors limites : ", index);
	}
}

/*Ajout ecouteur d'événement*/ 
arrowLeft.addEventListener('click', function () {
	currentIndex = (currentIndex - 1 + nbSlides)/*modulo qui permet de faire le slide infinie*/ % nbSlides;
	updateCarousel(currentIndex);
});

arrowRight.addEventListener('click', function () {
	currentIndex = (currentIndex + 1 + nbSlides) % nbSlides;
	updateCarousel(currentIndex);
});