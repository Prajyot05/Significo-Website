function homepageAnimation(){
    gsap.set(".slidesm", {scale: 5})
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: "top top",
            end: "bottom 45%",
            scrub: 1,
            onUpdate: function(self) {
                // Check if the scroll trigger is active
                if (self.isActive) gsap.to(document.body.setAttribute("theme", "black"));   
            }
        },
        ease: Power4
    })

    tl.to(".vdodiv", {
        '--clip' : "0%",
        ease: Power2,
    }, 'a') // This last parameter 'a' is used because whichever animations have same parameters, get executed together.
    tl.to(".slidesm", {
        scale: 1,
        ease: Power2
    }, 'a')
    tl.to(".lft", {
        xPercent: -10,
        ease: Power2
    }, 'b')
    tl.to(".rgt", {
        xPercent: 10,
        ease: Power2
    }, 'b')
}

function craftAnimation(){
    gsap.to(".craft", {
        scrollTrigger: {
            trigger: ".craft",
            start: "top 65%",
            end: "bottom 65%",
            onUpdate: function(self) {
                // if (self.isActive) document.body.setAttribute("theme", "cyan");
                if (self.isActive) gsap.to(document.body.setAttribute("theme", "cyan"));
            }
        },
        ease: Power4
    })
}

function realAnimation(){
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top 35%",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: function(self) {
                // if (self.isActive) document.body.setAttribute("theme", "salmon");
                if (self.isActive) gsap.to(document.body, {attr: {"theme": "salmon"}, duration: 0.5});
            }
        },
        xPercent: -200,
        ease: Power4
    })
}

function teamAnimation(){
    document.querySelectorAll(".listelem").forEach(function(el){
        el.addEventListener("mousemove", function (dets){
            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX), 
                // y: gsap.utils.random(-20, 20), 
                ease: Power4, duration: 0.5})
        })
        el.addEventListener("mouseleave", function(dets){
            gsap.to(this.querySelector(".picture"), {opacity: 0, ease: Power4, duration: 0.5})
        })
    })
    gsap.to(".team", {
        scrollTrigger: {
            trigger: ".team",
            start: "top 55%",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: function(self) {
                if (self.isActive) gsap.to(document.body, {attr: {"theme": "white"}, duration: 0.5});
            }
        },
        ease: Power4
    })
}

function paraAnimation(){
    var clutter = ""
    document.querySelector(".textpara").textContent.split("").forEach(function(e){
        if(e === " ") clutter += `<span>&nbsp;</span>`
        clutter += `<span class="opacity-10">${e}</span>`
    })
    document.querySelector(".textpara").innerHTML = clutter

    clutter = ""
    document.querySelector(".textpara2").textContent.split("").forEach(function(e){
        if(e === " ") clutter += `<span>&nbsp;</span>`
        clutter += `<span>${e}</span>`
    })
    document.querySelector(".textpara2").innerHTML = clutter

    gsap.set(".textpara span", {opacity: 0.1})
    gsap.set(".textpara2 span", {opacity: 0.1})

    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 50%",
            end: "bottom 80%",
            scrub: 0.2
        },
        opacity: 1,
        ease: Power4,
        stagger: 0.3
    })

    gsap.to(".textpara2 span", {
        scrollTrigger: {
            trigger: ".textpara2",
            start: "top 70%",
            end: "bottom 80%",
            scrub: 2
        },
        opacity: 1,
        ease: Power4,
        stagger: 0.3
    })
}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulesAnimation(){
    gsap.to(".capsule:nth-child(1)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        y: 0,
        ease: Power4
    })
}

loco();
homepageAnimation();
realAnimation();
craftAnimation();
teamAnimation();
paraAnimation();
capsulesAnimation();