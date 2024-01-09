gsap.to("#sun", {

});

gsap.to("#uranus", {

});
gsap.to("#jupiter", {

});
gsap.from("#saturn", {
    delay: 4,
    duration: 5,
    scale: 2,
    opacity: 0,
}),
    gsap.from("#beige", {
        delay: 3,
        duration: 5,
        scale: 2,
        opacity: 0,
    }),
    gsap.from("#whitered", {
        delay: 2,
        duration: 5,
        scale: 2,
        opacity: 0,
    }),
    gsap.from("#earth", {
        delay: 1,
        duration: 5,
        scale: 2,
        opacity: 0,
    }),
    gsap.from("#uranus", {
        duration: 5,
        scale: 2,
        opacity: 0,
    }),
    gsap.from("#sun", {
        delay: 5,
        duration: 2,
        scale: 2,
        opacity: 0,
    }),
    gsap.from("#mars", {
        delay: 6,
        duration: 5,
        scale: 2,
        opacity: 0,
    }),
    gsap.from("#blueplanet", {
        delay: 3,
        duration: 5,
        scale: 2,
        opacity: 0,
    }),
    gsap.from("#jupiter", {
        delay: 5,
        duration: 5,
        scale: 2,
        opacity: 0,
    }),
    gsap.from("#moon", {
        delay: 1,
        duration: 5,
        scale: 2,
        opacity: 0,
    }),
    gsap.to("#moon", {
        rotate: 360,
        duration: 10,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
        ease: "linear",
        repeat: -1,
    });
gsap.to("#earth", {
    duration: 10,
    rotate: 360,
    autoRotate: true,
    alignOrigin: [0.5, 0.5],

    repeat: -1,
});
gsap.to("#blueplanet", {


});
hovermars.onmouseenter = function () {
    gsap.to("#namemars", {
        opacity: 1,
    })
};
hoveruranus.onmouseenter = function () {
    gsap.to("#nameuranus", {
        opacity: 1,
    })
};
hoverearth.onmouseenter = function () {
    gsap.to("#nameearth", {
        opacity: 1,
    })
};
hoverjupiter.onmouseenter = function () {
    gsap.to("#namejupiter", {
        opacity: 1,
    })
};
