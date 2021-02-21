let mainModel = document.querySelector("#model-box>img");
let mainDish = document.querySelector("#dish-box>img");
let dishes = document.querySelectorAll(".dish-image-small");
let models = document.querySelectorAll(".model-image-small");
let navbar = document.querySelector(".navbar");
let navbarCollapseDiv = document.getElementById("navbarSupportedContent");

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const changeMainImage = (img) => {
    mainDish.src = img.src;
}


dishes.forEach(item => item.addEventListener("click", () => changeMainImage(item)));

models.forEach(model => {
    model.addEventListener("click", e => {
        lightbox.classList.add('active');
        const bigImg = document.createElement('iframe');
        bigImg.classList.add('big-model');
        console.log("model", model.src);
        console.log("panorama", model.getAttribute("data-panorama"));
        bigImg.src = model.getAttribute("data-panorama");
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(bigImg);
    })
})

lightbox.addEventListener("click", e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
})

let prevScrollpos = window.pageYOffset;
const changeNavBarState = () => {
  const windowHeight = window.innerHeight;
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("navbar-hide");
    navbar.classList.add("navbar-unhide");
  } else { 
    if (navbarCollapseDiv.classList.contains("show")) return;
    navbar.classList.remove("navbar-unhide");
    navbar.classList.add("navbar-hide");
  }
  prevScrollpos = currentScrollPos;
}

window.addEventListener("scroll", changeNavBarState)