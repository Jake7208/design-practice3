const gradient = document.querySelectorAll('span .background-gradient');
const loadingText1 = document.querySelector('.loading-text h1');
const loadingText2 = document.querySelector('.loading-text p');

gsap.from(loadingText1, 1, {
    y: 100,
    stagger: 1,
    opacity: 0,
})

gsap.from(loadingText2, 1, {
    y: 100,
    delay: 1,
    stagger: 1,
    opacity: 0,
})

console.log('hello world');