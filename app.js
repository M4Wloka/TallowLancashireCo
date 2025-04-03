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

// //CLOSING THE SOCKET CONNECTION ON PAGE UNLOAD
// window.addEventListener('unload', () => {
// 	if (socket) {
// 	  socket.close();
// 	}
//   });
// TEXT COMPRESSOR
document.addEventListener('DOMContentLoaded', function() {
    const supportsBrotli = 'Accept-Encoding' in new Request('', {
      headers: {'Accept-Encoding': 'br'}
    });
    
    if (supportsBrotli) {
      const links = document.querySelectorAll('link[rel="stylesheet"], script[src]');
      links.forEach(el => {
        const href = el.href || el.src;
        if (href && !href.includes('.br')) {
          el.href ? el.href = href + '.br' : el.src = href + '.br';
        }
      });
    }
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
  
//   // Run on load and resize (with debounce for performance)
//   let resizeTimeout;
//   window.addEventListener('load', adjustViewportForMobile);
//   window.addEventListener('resize', () => {
// 	clearTimeout(resizeTimeout);
// 	resizeTimeout = setTimeout(adjustViewportForMobile, 100);
//   });
