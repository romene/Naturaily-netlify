window.sr = ScrollReveal({ reset: true, duration: 600 });

sr.reveal('[data-reveal-resources]', {
  delay: 400,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  rotate: {x: 65},
});

sr.reveal('[data-reveal-technology]', {
  delay: 300,
});

sr.reveal('[data-reveal-tools]', {
  origin: 'bottom',
  delay: 300,
  distance: '150px',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  rotate: {x: 65},
});

sr.reveal('[data-reveal-results]', {
  origin: 'left',
  delay: 300,
  distance: '100px',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  rotate: {x: 65},
});

sr.reveal('[data-reveal-competence]', {
  origin: 'right',
  delay: 300,
  distance: '100px',
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
  rotate: {x: 65},
});

sr.reveal('#galleryFirst', {
  delay: 300,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('#gallerySecond', {
  delay: 400,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('#galleryThird', {
  delay: 500,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('#galleryFourth', {
  delay: 600,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});

sr.reveal('#galleryFifth', {
  delay: 700,
  easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
});
