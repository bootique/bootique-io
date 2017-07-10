// Import custom modernizer build
// https://modernizr.com/download?svg-setclasses
import "./modernizr/modernizr-custom.js";

export function applyModernizr() {
  // svg support (img tag)
  const svgExtension = /.*\.svg$/;
  if (!Modernizr.svg) {
    const images = $("img");
    if (images.length) {
      images.each(function () {
        const imgElement = $(this)[0] as HTMLImageElement;

        if (imgElement.src.match(svgExtension)) {
          imgElement.src = imgElement.src.slice(0, -3) + "png";
        }
      });
    }
  }
}
