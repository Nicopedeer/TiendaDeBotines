

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');

navLinks.forEach((link, index)=>{
    if (link.style.animation) {
        link.style.animation = '';
    }
    else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
    }
});
    burger.classList.toggle('toggle');
});

}

navSlide();


let textoCaptcha = document.querySelector('#captcha');
let textoUsuario = document.querySelector('#cajaTexto');
let botonEnviar = document.querySelector('#botonEnviar');
let output = document.querySelector('#output');
let botonActualizar = document.querySelector('#botonActualizar');

let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let textoVacio = [];

for (let i = 1; i <= 7; i++) {
textoVacio.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
textoCaptcha.innerHTML = textoVacio.join('');


botonEnviar.addEventListener('click', function(e) {
if (textoUsuario.value === textoCaptcha.innerHTML) {
} else {
    e.preventDefault();
output.classList.add("captchaIncorrecto");
output.innerHTML = "Incorrecto, actualiza el captcha";
}
}
);

botonActualizar.addEventListener('click', function() {
textoUsuario.value = "";
let refreshArr = [];
for (let j = 1; j <= 7; j++) {
refreshArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
}
textoCaptcha.innerHTML = refreshArr.join('');
output.innerHTML = "";
});
