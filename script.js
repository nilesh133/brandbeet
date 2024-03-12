// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.to("#first-loader-txt1", {
    display: 'block',
    duration: 0.3,
    onComplete: function () {
        gsap.to("#first-loader-txt1", {
            display: 'none',
            duration: 0.1,
        });
    }
});

gsap.to("#first-loader-txt2", {
    display: 'block',
    duration: 0.3,
    delay: 0.6,
    onComplete: function () {
        gsap.to("#first-loader-txt2", {
            display: 'none',
            duration: 0.1,
        });
    }
});

gsap.to("#first-loader-txt3", {
    display: 'block',
    duration: 0.3,
    delay: 1.2,
    onComplete: function () {
        gsap.to("#first-loader-txt3", {
            display: 'none',
            duration: 0.1,
        });
    }
});

gsap.to("#first-loader-txt4", {
    display: 'block',
    duration: 0.3,
    delay: 1.8,
    onComplete: function () {
        gsap.to("#first-loader-txt4", {
            display: 'none',
            duration: 0.1,
        });
    }
});

gsap.to("#first-loader", {
    top: '-100vh',
    delay: 2
});


const tlHero = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: '50% 50%',
        end: '150% 50%',
        markers: true,
        scrub: true,
        pin: true
    }
})
tlHero.to('.hero_rotation_content', {
    scale: '0.8',
    rotate: '-15',
}, 'a')
tlHero.to('#hero_rotation_content_div_2', {
    marginTop: '-1%',
}, 'a')
tlHero.to('#hero_rotation_content_div_3', {
    marginTop: '-3%',
}, 'a')
tlHero.to('#hero_rotation_content_div_4', {
    marginTop: '-7%',
}, 'a')
tlHero.to('#hero_rotation_content_div_5', {
    marginTop: '-9%'
}, 'a')
tlHero.to('.hero_text', {
    delay: "0.2",
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
}, 'a')
tlHero.to('.hero_text h1', {
    opacity: "1",
    delay: "0.2",
}, 'a')


const tlStrategic = gsap.timeline({
    scrollTrigger: {
        trigger: '#strategic',
        start: '0% 20%',
        end: '100% 50%',
        markers: true,
        scrub: true,
    }
})
tlStrategic.to('#strategic_line1_hover', {
    width: '100%',
}, 'strategic_anime')
tlStrategic.to('#strategic_line2_hover', {
    width: '100%',
    delay: '0.1'
}, 'strategic_anime')


const tlWork = gsap.timeline({
    scrollTrigger: {
        trigger: '#work-main-container',
        start: '50% 50%',
        end: '400% 50%',
        markers: true,
        scrub: true,
        pin: true
    }
})
tlWork.to('#work-first-container', {
    height: "60vh",
    duration: 4
}, 'a')
tlWork.to('#work-text-container', {
    height: "60vh",
    duration: 4
}, 'a')
tlWork.to('#work-text-container-left', {
    left: "0",
    duration: 4
}, 'a')
tlWork.to('#work-text-container-right', {
    right: '0',
    duration: 4
}, 'a')
tlWork.to('#work-third-container', {
    translateY: '-300vh',
    duration: 4
})

const tlOutcomes = gsap.timeline({
    scrollTrigger: {
        trigger: '#outcomes',
        start: '50% 50%',
        end: '400% 50%',
        markers: true,
        scrub: true,
        pin: true
    }
})
tlOutcomes.to("#outcomes-right", {
    marginTop: '-300vh',
    duration: 4,
}, 'out');
tlOutcomes.to(".outcomes-left-star", {
    rotate: '360deg',
    duration: 4,
}, 'out');
tlOutcomes.to(".outcomes-left-star", {
    rotate: '360deg',
   translateX: '40vw',
});

// tlOutcomes.to("#outcomes-right-1", {
//     marginTop: '-150%',
//     duration: 4,
// }, 'sec');
// tlOutcomes.to("#outcomes-right-2", {
//     opacity: 1,
//     duration: 4,
//     onComplete: function () {
//         tlOutcomes.to("#outcomes-right-2", {
//             opacity: 0.3
//         });
//     }
// }, 'sec');
// tlOutcomes.to("#outcomes-right-1", {
//     marginTop: '-225%',
//     duration: 4,
// }, 'sec2');
// tlOutcomes.to("#outcomes-right-3", {
//     opacity: 1,
//     duration: 4,
//     onComplete: function () {
//         tlOutcomes.to("#outcomes-right-3", {
//             opacity: 0.3
//         });
//     }
// }, 'sec2');