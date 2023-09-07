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
    const testimonials = document.getElementById('testimonials');
    const body = document.getElementsByTagName('body');

    // sticky circle
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: mockup,
            start: "center top",
            end:  'bottom-=500 bottom',
            markers: true,
            scrub: 2
        }
    });

    tl.fromTo(sticky,
        {
            translate: '-50% 100%',
            
        },
        {
            translate: '-50% -50%',
         
        }
    )
    tl.fromTo(sticky, // specify the target element here
        {
            width: '30em',
            height: '30em',
            backgroundColor: 'black',
            zIndex: 5
        },
        {
    
            width: '100%',
            height: '100vh',
            borderRadius: '0',
            left: '50%',
            backgroundColor: 'white',
            zIndex: 2,
            duration: 1
        }
    );
    tl.fromTo(testimonials, {
        opacity: 0,
    },
    {
        opacity: 1,
    }, '<+=.5');

    tl.fromTo(body, {
        backgroundColor: 'black',
    },
    {
        backgroundColor: 'white',
    })

const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)