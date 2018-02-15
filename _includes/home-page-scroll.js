window.sr = ScrollReveal({ reset: false, duration: 600 });

sr.reveal('[data-reveal-resources]', {
  delay: 200,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  rotate: {x: 65},
});

sr.reveal('[data-reveal-technology]', {
  delay: 200,
});

sr.reveal('[data-reveal-tools]', {
  origin: 'bottom',
  delay: 200,
  distance: '150px',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  rotate: {x: 65},
});

sr.reveal('[data-reveal-results]', {
  origin: 'left',
  delay: 200,
  distance: '100px',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  rotate: {x: 65},
});

sr.reveal('[data-reveal-competence]', {
  origin: 'right',
  delay: 200,
  distance: '100px',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  rotate: {x: 65},
});

sr.reveal('#galleryFirst', {
  delay: 200,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('#gallerySecond', {
  delay: 300,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('#galleryThird', {
  delay: 400,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('#galleryFourth', {
  delay: 500,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('#galleryFifth', {
  delay: 600,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});
