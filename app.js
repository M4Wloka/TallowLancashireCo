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
var s = skrollr.init({
	smoothScrolling: true,
	mobileDeceleration: 0.004
  });
  
  delayAnimation();
  
  function delayAnimation() {
	var animatedEl = document.getElementById('bounce');
	animatedEl.className = '';
	setTimeout(function() {
	  animatedEl.className = 'bounce'
	  setTimeout(delayAnimation, 1000)
	}, 1500)
  }