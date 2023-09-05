const loader = document.querySelector('.loading-screen');
const gradient = document.querySelectorAll('.background-gradient');
const loadingText1 = document.querySelector('.loading-text h1');
const loadingText2 = document.querySelector('.loading-text p');
const nav = document.querySelector('nav');
const heroText = document.querySelectorAll('.hero-text h1');
const heroBtns = document.querySelectorAll('.hero-btn');
    const videos = document.querySelector('.video');


    gsap.from(loadingText1, 1, {
        y: '-20%',
        opacity: 0,
        ease: Power4.ease,
    })
    
    gsap.from(heroText, 1, {
        duration: 1.5,
        opacity: 0,
        y: '10%',
        stagger: 0.3
    })

    gsap.from(nav, {
        duration: 1.5,
        opacity: 0,
        y: '-20%',
        delay: 1
    })
    gsap.from(heroBtns, {
        duration: 1.5,
        opacity: 0,
        y: '10%',
        stagger: 0.2,
        delay: 1
    })
