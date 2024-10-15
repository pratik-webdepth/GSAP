// NAVBAR WHILE SCROLLING
gsap.to("#nav",{
    zIndex:99,
    backgroundColor: "black",
    height: "70px",
    duration:"0.6",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top -8%",
        scrub:1,
    }
})
gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:false,
        start:"top -35%",
        end:"top -100%",
        scrub:3,
    }

})