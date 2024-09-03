const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0

const arrowLeft = document.querySelector("#banner .arrow_left");
const arrowRight = document.querySelector("#banner .arrow_right");


 
const nbSlides = slides.length;

const dots = document.querySelectorAll('.dot');

const divDots = document.getElementById("dots");
for (let i = 0; i < nbSlides; i++) {
	const dot = document.createElement('span');
	dot.classList.add('dot');
	if (i == 0) {
		dot.classList.add('dot_selected');
	}
	divDots.appendChild(dot);
}



arrowLeft.addEventListener('click', function() {
    alert('Vous avez cliqué sur la flèche gauche!');
});

arrowRight.addEventListener('click', function() {
    alert('Vous avez cliqué sur la flèche gauche!');
});