// breakpoints.js

function updateBreakpoint() {
  const width = window.innerWidth;
  const breakpoint = document.getElementById('currentBreakpoint');

  // Check window width and update breakpoint text based on Bootstrap's breakpoints
  if (width < 576) {
    breakpoint.textContent = 'XS';
  } else if (width >= 576 && width < 768) {
    breakpoint.textContent = 'SM';
  } else if (width >= 768 && width < 992) {
    breakpoint.textContent = 'MD';
  } else if (width >= 992 && width < 1200) {
    breakpoint.textContent = 'LG';
  } else if (width >= 1200 && width < 1400) {
    breakpoint.textContent = 'XL';
  } else {
    breakpoint.textContent = 'XXL';
  }
}

// Initialize the breakpoint size on page load and resize
window.addEventListener('load', updateBreakpoint);
window.addEventListener('resize', updateBreakpoint);
