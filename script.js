// circle skill
// const circles = document.querySelectorAll(".circle");
// circles.forEach((element) => {
//     let dots = element.getAttribute("data-dots");
//     let marked = element.getAttribute("data-parcent");
//     let parcent = Math.floor(dots*marked/100);
//     let poits = "";
//     let rotate = 360 / dots;

//     for(let i = 0; i < dots; i++) {
//        poits += `<div class="poits" id="all-points" style="--i:${i};--rot:${rotate}deg"></div>`;
//     }
//     element.innerHTML = poits;
//     const pointsMarked = element.querySelectorAll(".poits");
//     for(let i = 0; i < parcent; i++) {
//         pointsMarked[i].classList.add('marked');
//     }
    
    
// });



// mix it up portfolio section 
var mixer = mixitup(".portfolio-gallery");

// active menu
const menuLi = document.querySelectorAll("header ul li a");
const section = document.querySelectorAll("section");

function activeMenu() {
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop) {
        
    }
    menuLi.forEach((sec) => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// toggle icon navbar

const nemuIcon = document.querySelector("#menu-icon i");
const navlist = document.querySelector(".navlist");

nemuIcon.onclick = () => {
    nemuIcon.classList.toggle("fa-xmark");
    navlist.classList.toggle("open");
}

window.onscroll = () => {
    nemuIcon.classList.remove("fa-xmark");
    navlist.classList.remove("open");
};
