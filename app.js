//NAVBAR
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) => {
	link.addEventListener("click", () => {
		menuLinks.forEach((link) => {
			link.classList.remove("is-active");
		});
		link.classList.add("is-active");
	});
});

//timeline 
const swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	initialSlide: 3,
	coverflowEffect: {
	  slideShadows: true,
	  rotate: 0,
	  stretch: 450,
	  depth: 250,
	  modifier: 1
	}
  });

swiper.on('transitionEnd', () => {
getSlideContent()
})

function getSlideContent () {
const ActiveSlide = document.querySelector('.swiper-slide-active')
console.log(ActiveSlide.innerText)
}