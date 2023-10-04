'use strict'
document.querySelector("#cargar1").addEventListener("click",cargar1)
document.querySelector("#cargar2").addEventListener("click",cargar2)
document.querySelector("#cargar3").addEventListener("click",cargar3)
document.querySelector("#vaciar").addEventListener("click",vaciar_tabla)
let producto = [];


function cargar1(e){
    e.preventDefault();
    let form = document.querySelector('#formTabla');
    let formData = new FormData(form);
    let botin = formData.get('producto');
    let precio = formData.get('precio');
    let itemNuevo = {
        botin: botin,
        precio: precio,
        cantidad: 1,
    }
    producto.push(itemNuevo);
    mostrar_listado();
}
function cargar2(e){
    e.preventDefault();
    let form = document.querySelector('#formTabla');
    let formData = new FormData(form);
    let botin = formData.get('producto');
    let precio = formData.get('precio');
    let itemNuevo = {
        botin: botin,
        precio: precio,
        cantidad: 2,
    }
    producto.push(itemNuevo);
    mostrar_listado();
}
function cargar3(e){
    e.preventDefault();
    let form = document.querySelector('#formTabla');
    let formData = new FormData(form);
    let botin = formData.get('producto');
    let precio = formData.get('precio');
    let itemNuevo = {
        botin: botin,
        precio: precio,
        cantidad: 3,
    }
    producto.push(itemNuevo);
    mostrar_listado();
   
}

function mostrar_listado(){
    let productoDOM = document.querySelector("#tablainicio");
    productoDOM.innerHTML= '';
    for (const item of producto) {
        productoDOM.innerHTML += "<td>" + item.botin + "</td>" + "<td>" + item.precio +"</td>" + "<td>" + item.cantidad + "</td>";
    }
}

function vaciar_tabla(e){
    e.preventDefault();
    let productoDOM = document.querySelector("#tablainicio");
    productoDOM.innerHTML= '';
    producto = [];
}

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
