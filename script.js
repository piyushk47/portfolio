var t1=gsap.timeline();

t1.to("#loader",{
    height:0,
    duration:2,

    ease:Expo.easeInOut
})
.to("#green",{
    height:"100%",
    top:0,
    duration:2,
    delay:-2,
    ease:Expo.easeInOut
})
.to("#green",{
   height:0,
   duration:1.7,
   delay:-1,
   ease:Expo.easeInOutI
}

)


// document.querySelectorAll(".reveal")
// .forEach(function(elem){
//    let spanParent= document.createElement("span");
//    let spanChild= document.createElement("span");

//    spanParent.classList.add("parent"); // <span class="parent"></span>
//    spanChild.classList.add("child"); // <span class="child"></span>

//    spanChild.textContent=elem.textContent  //<span class="child">creative</span>
//    spanParent.appendChild(spanChild)  // <span class="parent"><span class="child">creative</span></span>

// elem.innerHTML=" ";
// elem.appenChild(spanParent);
// })

function animateSvg(){

   document.querySelectorAll("#Visual>g").forEach(function(e){
      var character=e.childNodes[1].childNodes[1];
      character.style.strokeDasharray= character.getTotalLength()+'px';
      character.style.strokeDashoffset= character.getTotalLength()+'px';
   })
   gsap.to("#Visual>g>g>path ,#Visual>g>g>polyline",{

      strokeDashoffset:0,
     
      duration:2,
      ease:Expo.easeInOut,
      delay:2
   })

   
}
animateSvg();
