const sr = ScrollReveal();

sr.reveal('.infou h1', {
    origin: 'top',
    distance: '50px',
    duration: 3000,
    reset: true
});
sr.reveal('.Welcome img', {
    origin: 'right',
    distance: '150px',
    duration: 2000,
    reset: true
});

sr.reveal('.Welcome p', {
    origin: 'right',
    distance: '80px',
    duration: 3000,
    reset: true
});
sr.reveal('.icon1', {
    origin: 'left',
    distance: '80px',
    duration: 3000,
    reset: true
},500);

sr.reveal('.title', {
    origin: 'top',
    distance: '50px',
    duration: 3000,
    reset: true
});

sr.reveal('.left img', {
    origin: 'left',
    distance: '150px',
    duration: 2000,
    reset: true
});
sr.reveal('.right h2,p', {
    origin: 'right',
    distance: '80px',
    duration: 3000,
    reset: true
});
sr.reveal('.right a', {
    origin: 'bottom',
    distance: '80px',
    duration: 3000,
    reset: true
});

sr.reveal('.My_Project h1', {
    origin: 'bottom',
    distance: '50px',
    duration: 3000,
    reset: true
});

sr.reveal('.btn', {
    origin: 'bottom',
    distance: '50px',
    duration: 3000,
    reset: true
});

sr.reveal('.Soc h1', {
    origin: 'left',
    distance: '80px',
    duration: 3000,
    reset: true
});

sr.reveal('.icon2', {
    origin: 'left',
    distance: '80px',
    duration: 3000,
    reset: true
},500);

(function($){
    new WOW().init();
})(jQuery);


