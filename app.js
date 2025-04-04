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

function adjustViewportForMobile() {
	const viewportMeta = document.querySelector('meta[name="viewport"]');
	const screenWidth = window.innerWidth;
  
	if (!viewportMeta) {
	  // Create viewport meta if it doesn't exist (rare case)
	  const meta = document.createElement('meta');
	  meta.name = "viewport";
	  document.head.appendChild(meta);
	  return adjustViewportForMobile(); // Retry after creation
	}
  
	// Conditions for different screen sizes
	if (screenWidth <= 400) { // Very small screens (e.g., old phones)
	  viewportMeta.setAttribute(
		'content',
		'width=400, initial-scale=0.8, maximum-scale=1.0, user-scalable=yes'
	  );
	} 
	else if (screenWidth <= 768) { // Standard mobile devices
	  viewportMeta.setAttribute(
		'content',
		'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
	  );
	} 
	else { // Desktop & tablets
	  viewportMeta.setAttribute(
		'content',
		'width=device-width, initial-scale=1.0'
	  );
	}
  }


  // Add this to your existing app.js
document.addEventListener('DOMContentLoaded', function() {
	// Normal page load initialization
	
	// Handle page restoration from bfcache
	window.addEventListener('pageshow', function(event) {
	  if (event.persisted) {
		console.log('Page restored from bfcache');
		// Reinitialize any dynamic elements if needed
	  }
	});
  
	// Avoid using these as they prevent bfcache:
	// window.onunload = function() {};
	// window.onbeforeunload = function() {};
  });
  
  document.addEventListener('DOMContentLoaded', function() {
	const images = document.querySelectorAll('img[src*="/components/photos/"]:not([loading])');
	
	images.forEach(img => {
	  // Skip if already near viewport
	  if (isInViewport(img)) return;
	  
	  // Store original src
	  const originalSrc = img.src;
	  img.dataset.src = originalSrc;
	  img.removeAttribute('src');
	  
	  // Add intersection observer
	  const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
		  if (entry.isIntersecting) {
			const lazyImage = entry.target;
			lazyImage.src = lazyImage.dataset.src;
			observer.unobserve(lazyImage);
		  }
		});
	  });
	  
	  observer.observe(img);
	});
	
	function isInViewport(element) {
	  const rect = element.getBoundingClientRect();
	  return (
		rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.bottom >= 0
	  );
	}
  });