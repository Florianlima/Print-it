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

const imageElement = document.querySelector("#banner .banner-img");
const textElement = document.querySelector("#banner p");

arrowLeft.addEventListener('click', function () {
	currentIndex = (currentIndex - 1 + nbSlides) % nbSlides;
	updateCarousel(currentIndex);
});

arrowRight.addEventListener('click', function () {
	currentIndex = (currentIndex - 1 + nbSlides) % nbSlides;
	updateCarousel(currentIndex);
});