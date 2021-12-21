const container = document.getElementById('hero');
const content = document.getElementById('content');
const navbar = document.getElementById('navbar');
const marca = document.getElementById('marca');
const menuEle = document.getElementById('menu');
const saludo = document.getElementById('saludo')
window.addEventListener("load",()=>{
    container.classList.remove("circle");
    content.classList.remove("circle");
    navbar.classList.remove("hide");
    setTimeout(() => {
        marca.style.transform = "translateX(0)";
        menuEle.style.transform = "translateY(0)";
    }, 1000);
    setTimeout(() => {
        saludo.classList.add("coloreado");
    }, 1500);
});
