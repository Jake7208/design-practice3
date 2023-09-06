gsap.registerPlugin(ScrollTrigger);
const nav = document.querySelector('nav');
const heroText = document.querySelectorAll('.hero-text h1');
const heroBtns = document.querySelectorAll('.hero-btn');
const videos = document.querySelector('.video');    

    gsap.from(heroText, 1, {
        duration: 1,
        opacity: 0,
        y: '-10%',
        stagger: 0.3
    })

    gsap.from(nav, {
        duration: 1,
        opacity: 0,
        y: '-20%',
        delay: .5
    })
    gsap.from(heroBtns, {
        duration: 1,
        opacity: 0,
        y: '10%',
        stagger: 0.2,
        delay: .5
    })

    const mockup = document.getElementById('mockups');
    // Pin the element initially



    

const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)