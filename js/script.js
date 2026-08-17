const navbar = document.querySelector("#Navbar");

window.addEventListener("scroll" , () =>{
    if(window.scrollY > 50){
        navbar.classList.add("blurnav");
    }
    else{
        navbar.classList.remove("blurnav");
    }
});

const tl = gsap.timeline();
tl.to("#Navbar" , {
    y:0,
    opacity:1,
    duration:0.3,
})
tl.to(".hero-box" , {
    y:0,
    opacity:1,
    duration:0.6,
})

// menu button
const navlink = document.querySelector(".nav-link");
const menubtn = document.querySelector("#Navbar i");

menubtn.addEventListener("click" , () =>{
    navlink.classList.toggle("showNavlink")
})
