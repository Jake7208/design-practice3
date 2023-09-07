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

    let sticky = document.querySelector('.sticky-container');
    let mockup = document.querySelector('mockup-container');
    const testimonials = document.querySelector('.testimonials');

    // sticky circle
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: mockup,
            start: 'center+=200 bottom',
            end: testimonials,
            pin: true,
            markers: true,
            scrub: 2
        }
    });
    
    tl.fromTo(sticky, // specify the target element here
        {
            width: '35em',
            height: '35em',
            borderRadius: '35em',
            backgroundColor: 'black',
            zIndex: -1
        },
        {
            width: '100%',
            height: '100%',
            borderRadius: '0',
            backgroundColor: 'white',
            zIndex: 1,
            duration: 3
        }
    );

const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)