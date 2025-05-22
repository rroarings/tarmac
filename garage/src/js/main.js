// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import Lenis from 'lenis'

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', (e) => {
});
