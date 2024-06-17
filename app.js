let crsr=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x-10+"px"
    crsr.style.top=dets.y-10+"px"
})

let crsrb=document.querySelector("#cursorback")
document.addEventListener("mousemove",function(dets){
    crsrb.style.left=dets.x-150+"px"
    crsrb.style.top=dets.y-150+"px"
})





gsap.to("#nav",{
    backgroundColor:"black",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -20%",
        scrub:1

    }
})

gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroll:"body",
        // markers:true,
        start:"top -25%",
        end: "top -70%",
        scrub:2
    }

})

var allh4=document.querySelectorAll("#nav h4")
allh4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2.5
        crsr.style.border="0.5px solid white"
        crsr.style.backgroundColor="transparent"
    })
})

allh4.forEach(function(ele){
    ele.addEventListener('mouseleave',function(){
        crsr.style.scale=1
        crsr.style.border="none"
        crsr.style.backgroundColor="#95C11E"
    })
})

gsap.from(".about_us img, #about-us-in",{
    y:90,
    opacitity:0,
    duration:4,
    scrollTrigger:{
        trigger:".about_us",
        scroll:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3,
    },
})

gsap.from(".card",{
    scale:0.8,
    // opacitity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroll:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})


gsap.from("#colon1",{
    y:-70,
    x:-70,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroll:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroll:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroll:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3}

})

