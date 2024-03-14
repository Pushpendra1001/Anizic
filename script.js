// scrolltrigger
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



// gsap
gsap.from(".a-tag-link", {
    stagger: .1,
    delay: 0.1,
    y: 10,
    duration: 0.8,
    ease: Power2,
    opacity: 0,
   
})


gsap.from(".home-animate",{
    y : 50,
    duration : 1 , 
    delay : 0.1 , 
    stagger : .4 ,
    ease : Expo,
})






Shery.textAnimate("#ephemeral h1", {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1.5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });


  Shery.imageEffect("#ephemeral img", {
    style: 4, //Select Style
    config : {"uColor":{"value":false},"uSpeed":{"value":1,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":2.79,"range":[0,5]},"uFrequency":{"value":5.11,"range":[0,10]},"geoVertex":{"range":[1,64],"value":52.94},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500076600177712},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.79,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });



  Shery.imageEffect(".img-effect img", {
    style: 5, //Select Style
     
    config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666243009659379},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.98,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":31.78},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]},"uColor":{"value":true},"uSpeed":{"value":0.6,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]}}
  });


  gsap.from("#ephemeral img",{
    z : 6,
    opacity : 0,
    duration : 1.5,
  })



Shery.imageEffect("#bottle-img",{
    style : 5,
    
    config : {"a":{"value":2,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0658713338346892},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.18,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.6,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.53,"range":[0,10]},"metaball":{"value":0.198826,"range":[0,2],"_gsap":{"id":31}},"discard_threshold":{"value":0.75,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.26,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}},
    gooey : true
})



gsap.from("#think-of-future video",{
       z : 6,
        opacity : 1,
        duration : 1.5,  
})


document.querySelector(" #futuretxt").addEventListener("mouseover",function()
{
    gsap.from("#think-of-future video", {
        opacity : 1,
        duration : 1,
        
    })
});


document.querySelector("#futuretxt").addEventListener("mouseleave",function()
{
    gsap.to("#think-of-future video", {
        opacity : 0,
        duration : 1,
    })
});