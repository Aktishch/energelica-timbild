import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import ScrollSmoother from "./lib/ScrollSmoother.3.11.5.min.js";



window.addEventListener('DOMContentLoaded', () => loadHandler())


function loadHandler() {
    gsap.registerPlugin(Flip, ScrollTrigger, ScrollSmoother)
    ScrollTrigger.defaults({
        toggleActions: "play none none reverse"
    })

    scrollSmootherInit()
   
    animationInit()

    if (document.readyState == 'complete') {
        window.addEventListener('load', loadCompleteHandler)
    } else {
        loadCompleteHandler()
    }
}

function loadCompleteHandler() {
    ScrollTrigger.refresh(true)
    if (ScrollTrigger.isTouch !== 1){
        ScrollSmoother.get().scrollTop(0)
        ScrollSmoother.get().paused(false)
    }
    document.body.classList.add('load-complete')
}

function animationInit() {
    // about
    {
        gsap.from(
            '.about__content',
            {
                xPercent: -50,
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top bottom',
                    end: 'bottom 50%',
                    scrub: 3
                }
            }
        )
        gsap.from(
            '.about__pack',
            {
                xPercent: 20,
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top bottom',
                    end: 'bottom 50%',

                    scrub: 3
                }
            }
        )
    }

    // approach 
    {
        gsap.from(
            '.approach__content',
            {
                xPercent: 50,
                scrollTrigger: {
                    trigger: '.approach',
                    start: 'top bottom',
                    end: 'center 75%',
                    scrub: 3
                }
            }
        )
        gsap.from(
            '.approach__pack',
            {
                xPercent: -20,
                scrollTrigger: {
                    trigger: '.approach',
                    start: 'top bottom',
                    end: 'center 75%',
                    scrub: 3
                }
            }
        )
    }

    // feedback 
    {
        gsap.from(
            '.feedback__content',
            {
                xPercent: -50,
                scrollTrigger: {
                    trigger: '.feedback',
                    start: 'top bottom',
                    end: 'bottom 90%',
                    scrub: 3
                }
            }
        )
        gsap.from(
            '.feedback__pack',
            {
                xPercent: 20,
                scrollTrigger: {
                    trigger: '.feedback',
                    start: 'top bottom',
                    end: 'bottom 90%',
                    scrub: 3
                }
            }
        )
    }

    // main
    {
        gsap.timeline({
            defaults: {
                duration: 1,
            }
        })
            .from(
                '.main__title',
                { x: -120, opacity: 0, }
            )
            .from(
                '.main__subtitle',
                { x: -120, opacity: 0, stagger: 0.1 },
                '-=0.75'
            )
            .from(
                '.main__btn',
                { x: -120, opacity: 0, },
                '-=0.75'
            )
    }

    // services
    {
        const cards = gsap.utils.toArray('.services .card')
        gsap.set(cards, { transition: 'none' })
        cards.forEach((card, index) => {
            gsap.from(
                card,
                {
                    xPercent: 30,
                    opacity: 0,
                    delay: index / 10,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card.parentElement,
                        start: 'top 95%',
                    }
                }
            )
        })

    }

    // advantages 
    {
        const cards = gsap.utils.toArray('.advantages__item .card')
        gsap.set(cards, { transition: 'none' })
        cards.forEach((card, index) => {
            gsap.from(
                card,
                {
                    yPercent: 50,
                    opacity: 0,
                    delay: index / 10,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card.parentElement,
                        start: 'top 95%',
                    }
                }
            )
        })
    }

    // services
    {
        const cards = gsap.utils.toArray('.events-slide .card')
        gsap.set(cards, { transition: 'none' })
        cards.forEach((card, index) => {
            gsap.from(
                card,
                {
                    xPercent: 30,
                    opacity: 0,
                    delay: index / 10,
                    duration: 1,
                    scrollTrigger: {
                        trigger: card.parentElement,
                        start: 'top 95%',
                    }
                }
            )
        })

    }
}

function scrollSmootherInit() {
    if (ScrollTrigger.isTouch !== 1) {
        ScrollSmoother.create({
            wrapper: '.smooth-wrapper',
            content: '.smooth-content',
            smooth: 3,
            effects: true,
        })
        ScrollSmoother.get().paused(true)
    }
}


