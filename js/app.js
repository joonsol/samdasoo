gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  duration: 1
})

tl.fromTo('.sc0 .text>*', {
  delay: 1,
  opacity: 0,
},
  {
    opacity: 1,
    stagger: .2
  })

tl.fromTo('.fix-samdasoo', {
  opacity: 0,
  bottom: '40%'
}, {
  opacity: 1,
  bottom: '50%'

})


const scene1 = gsap.timeline()

ScrollTrigger.create({
  animation: scene1,
  trigger: '.sc1',
  start: 'top 30%',
  end: 'top 50%',
  scrub: 3
})

scene1.fromTo('.sc1 .text>*', {
  opacity: 0,
  y: 10
},
  {
    y: 0,
    opacity: 1,
    stagger: .3,

  }
)
const scene2 = gsap.timeline()

ScrollTrigger.create({
  animation: scene2,
  trigger: '.sc2',
  start: 'top 30%',
  end: 'top 50%',
  scrub: 3
})

scene1.fromTo('.sc2 .text>*', {
  opacity: 0,
  y: 10
},
  {
    y: 0,
    opacity: 1,
    stagger: .3,

  }
)
const scene3 = gsap.timeline()

ScrollTrigger.create({
  animation: scene3,
  trigger: '.sc3',
  start: 'top 30%',
  end: 'top 50%',
  scrub: 3
})

// scene1.fromTo('.fix-samdasoo ', {
//   opacity: 1,
// },
//   {
//     opacity: 0,

//   }
// )

 const s3Swiper = new Swiper(".instar-slider", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });