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
    gsap.from("#whiteRed", {
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
    gsap.from("#bluePlanet", {
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
gsap.to("#blue-planet", {

});
hoverMars.onmouseenter = function () {
    gsap.to("#nameMars", {
        opacity: 1,
    })
};
hoverUranus.onmouseenter = function () {
    gsap.to("#nameUranus", {
        opacity: 1,
    })
};
hoverEarth.onmouseenter = function () {
    gsap.to("#nameEarth", {
        opacity: 1,
    })
};
hoverJupiter.onmouseenter = function () {
    gsap.to("#nameJupiter", {
        opacity: 1,
    })
};
hoverBluePlanet.onmouseenter = function () {
    gsap.to("#nameBluePlanet", {
        opacity: 1,
    })
};
hoverWhiteRed.onmouseenter = function () {
    gsap.to("#nameWhiteRed", {
        opacity: 1,
    })
};
hoverSaturn.onmouseenter = function () {
    gsap.to("#nameSaturn", {
        opacity: 1,
    })
};
hoverSun.onmouseenter = function () {
    gsap.to("#nameSun", {
        opacity: 1,
    })
};
hoverBeige.onmouseenter = function () {
    gsap.to("#nameBeige", {
        opacity: 1,
    })
};
gsap.to("[data-speed]", {
    y: (i, el) =>
        (1 - parseFloat(el.getAttribute("data-speed"))) *
        ScrollTrigger.maxScroll(window),
    ease: "none",
    scrollTrigger: {
        start: 0,
        end: "max",
        invalidateOnRefresh: true,
        scrub: 0,
    },
});
gsap.from("#message", {
    // Ce qui change par rapport à avant
    scale: 3,
    opacity: 0,
    scrollTrigger: {
        trigger: ".section2",
        // markers: true,
        // afficher les marqueurs de ScrollTrigger
        // utile pour débugger
        // position des marqueurs
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
    },
});

gsap.from(["#satellite1", "#satellite2", "#satellite3", "#satellite4", "#satellite5", "#satellite6", "#satellite7", "#satellite8", "#satellite9"], {
    // Ce qui change par rapport à avant
    opacity: 0,
    scrollTrigger: {
        trigger: "#message",
        // afficher les marqueurs de ScrollTrigger
        // utile pour débugger
        // position des marqueurs
        start: "top 90%",
        end: "bottom 10%",
        scrub: 1,
    },
    stagger: 0.1
});
gsap.from(".section2", {
    // Ce qui change par rapport à avant
    scrollTrigger: {
        trigger: ".section2",
        // afficher les marqueurs de ScrollTrigger
        // utile pour débugger
        // markers: true,
        // position des marqueurs
        start: "top 0%",
        end: "bottom +=500px",
        pin: true,
    },
});
gsap.to("#satelliteSection3", {
    duration: 10,
    motionPath: {
        path: "#motionPath path",
        align: "#motionPath path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
    },
    ease: "none",
});
gsap.to(["#satellite1", "#satellite2", "#satellite3", "#satellite4", "#satellite5", "#satellite6", "#satellite7", "#satellite8", "#satellite9"], {
    // Ce qui change par rapport à avant
    opacity: 0,
    delay: 1,
    scrollTrigger: {
        trigger: "#message",
        // afficher les marqueurs de ScrollTrigger
        // markers: true,
        // utile pour débugger
        // position des marqueurs
        start: "top",
        end: "bottom ",
        scrub: 1,
    },
    stagger: 0.1
});
gsap.to(["#satellite1", "#satellite2", "#satellite3", "#satellite4", "#satellite5", "#satellite6", "#satellite7", "#satellite8", "#satellite9"], {
    // Ce qui change par rapport à avant
    opacity: 0,
    delay: 1,
    scrollTrigger: {
        trigger: "#message",
        // afficher les marqueurs de ScrollTrigger
        // markers: true,
        // utile pour débugger
        // position des marqueurs
        start: "top",
        end: "bottom ",
        scrub: 1,
    },
    stagger: 0.1
});
gsap.from(["#star1", "#star2", "#star3", "#star4", "#star5", "#star6", "#star7", "#star8", "#star9"], {
    // Ce qui change par rapport à avant
    opacity: 0,
    delay: 1,
    scrollTrigger: {
        trigger: "#message",
        // afficher les marqueurs de ScrollTrigger
        //markers: true,
        // utile pour débugger
        // position des marqueurs
        start: "top",
        end: "bottom ",
        scrub: 1,
    },
    stagger: 0.1
});
avoidAstro.onmousemove = function (event) {

    console.log(event.offsetX, event.offsetY)

    const x_pointer = event.offsetX
    const x_center = 105
    gsap.to("#astro", {
        x: x_center - x_pointer
    })
};
