// Import slick-carousel from node_modules 
// Loading from /scripts because https://github.com/kenwheeler/slick/pull/3307
import "slick-carousel";

// Testimonialz Slick slider
export function testimonialsSlider() {
	const slickSlider = $('.slider-center');
	if (slickSlider.length) {
		slickSlider.slick({
			centerMode: true,
			centerPadding: '33.5%',
			slidesToShow: 1,
			speed: 500,
			responsive: [{
				breakpoint: 992,
				settings: {
					arrows: false
				}
			}, {
				breakpoint: 768,
				settings: {
					arrows: false,
					centerPadding: '25%'
				}
			}, {
				breakpoint: 576,
				settings: {
					arrows: false,
					centerPadding: '20%'
				}
			}, {
				breakpoint: 500,
				settings: {
					arrows: false,
					centerPadding: '15%'
				}
			}]
		});
	}
}