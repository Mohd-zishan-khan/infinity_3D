const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var a=document.querySelector("#elem1")
// var abc=a.getAttribute("data-img")
// console.log(abc)

var elemc=document.querySelector("#elem-container")
var fixed=document.querySelector("#fixed-img")
elemc.addEventListener("mouseenter",function(){
   
    fixed.style.display ="block"

})
elemc.addEventListener("mouseleave",function(){
    fixed.style.display ="none"

})

var elems =document.querySelectorAll(".elem")

elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        image = e.getAttribute("data-img"),
        fixed.style.backgroundImage=`url(${image})`
    })

})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




// var fixed=document.querySelector("#fixed-img")
// var elem1=document.querySelector("#elem1")

// elem1.addEventListener("mouseenter",funtion()
// {
//  var image = elem1.getAttribute("data-img")
//  fixed.style.backgroundImage=`url(${image})`
// })
