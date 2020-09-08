let btn = document.querySelector(".landing-btn");
let landInfo = document.querySelector(".landing-info-off")

let dropDown = () => {
    landInfo.classList.toggle("landing-info-on");
}
btn.addEventListener("click", dropDown, false);
