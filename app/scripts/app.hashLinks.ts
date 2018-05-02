export function applyHashLinks() {
  // Smooth scroll to #links (https://css-tricks.com/snippets/jquery/smooth-scrolling/)
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.on('click', function(event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top 	// - $('#top-nav').height() - 15   // + height of fixed header + padding from it
																						// no fixed topNav -> no extra height dependencies
					}, 300);
				}
			}
		});
}
