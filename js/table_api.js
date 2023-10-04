
let url = `https://62bfbe3ac134cf51cec3761e.mockapi.io/api/compras`;
let pagina = 1;
async function Consultar_compras(){
    let tablaDom = document.querySelector("#tablainicio");
    tablaDom.innerHTML = '';
    try {
        let respuesta = await fetch(`${url}?page=${pagina}&limit=10`);
        let json =  await respuesta.json();
        for (const item of json) {
            tablaDom.innerHTML += `
                <tr>
                <td> ${item.nombre}</td>
                <td> $${item.precio}</td>
                <td> ${item.nro_compra}</td>
                <td class="invisible">
                    <button id="${item.id}" class="BtnEliminar">Eliminar</button>
                    <button id="${item.id}" class="BtnModificar">Modificar</button>
                </td>
                </tr>`
        }
        let BtnEliminar = document.querySelectorAll(".BtnEliminar");
        BtnEliminar.forEach(e => e.addEventListener("click", elimininarRegistro));
        let BtnModificar = document.querySelectorAll(".BtnModificar");
        BtnModificar.forEach(e => e.addEventListener("click", modificarRegistro));

    } 
    catch (error) {
        console.log(error);
    }
}

Consultar_compras();


let BtnSiguiente = document.querySelector("#siguiente").addEventListener("click", function(){
    pagina = pagina+1;
    Consultar_compras();
});
let BtnAnterior = document.querySelector("#anterior").addEventListener("click", function(){
    if(pagina > 1){
        pagina = pagina-1;
        Consultar_compras();
    }
    
});
let BtnEnviar = document.querySelector("#BtnPost").addEventListener("click", AgregarRegistro);

async function AgregarRegistro(){
    let form = document.querySelector("#formTabla");
    let formData = new FormData(form);
    let cliente = formData.get('Cliente');
    let precio = formData.get('precio');
    let nro_compra = formData.get('nro_compra');
    let nuevoRegistro = {
        nombre : cliente,
        precio : precio,
        nro_compra : nro_compra
    }
    try {
        let enviarRegistro = await fetch(url, {
            "method" : "POST",
            "headers" : {"Content-type" : "application/json"},
            "body" : JSON.stringify(nuevoRegistro)
        })
        if(enviarRegistro.status === 201){
            Consultar_compras();
        }
    } catch (error) {
        console.log(error);
    }
}


async function elimininarRegistro(){
    try {
        let res = await fetch(`${url}/${this.id}`, {
            "method" : "DELETE",
        })
        if(res.status === 200){
            Consultar_compras();
        }
    } 
    catch (error) {
        console.log(error);
    }
}

async function modificarRegistro(){
    let form = document.querySelector("#formTabla");
    let formData = new FormData(form);
    let cliente = formData.get('Cliente');
    let precio = formData.get('precio');
    let nro_compra = formData.get('nro_compra');
    let nuevoRegistro = {
        nombre : cliente,
        precio : precio,
        nro_compra : nro_compra
    }
    try {
        let enviarRegistro = await fetch(`${url}/${this.id}`, {
            "method" : "PUT",
            "headers" : {"Content-type" : "application/json"},
            "body" : JSON.stringify(nuevoRegistro)
        })
        if(enviarRegistro.status === 200){
            Consultar_compras();
        }
    } 
    catch (error) {
        console.log(error);
    }

}

let enviarX3 = document.querySelector("#BtnPostx3").addEventListener("click", function(){
    let contador = 0;
    let intervalo = setInterval(function() {
        if(contador < 3){
            AgregarRegistro();
            contador++;
        }
        else{
            clearInterval(intervalo);
        }
    }, 1000);
})

let aplicarFiltro = document.querySelector("#enviarSelect").addEventListener("click", RegistroFiltrado);

function RegistroFiltrado(){
    let form = document.querySelector("#formTabla");
    let formData = new FormData(form);
    let filtro = formData.get("filtros")
    if(filtro == "Menor500"){
        ObtenerRegistroMenor();
    }
    else{
        ObtenerRegistroMayor();
    }
}

async function ObtenerRegistroMenor(){
    let tablaDom = document.querySelector("#tablainicio");
    tablaDom.innerHTML = '';
    try {
        let respuesta = await fetch(`${url}?page=${pagina}&limit=10`);
        let json =  await respuesta.json();
        for (const item of json) {
            if(item.precio < 500){
            tablaDom.innerHTML += `
                <tr>
                <td> ${item.nombre}</td>
                <td> $${item.precio}</td>
                <td> ${item.nro_compra}</td>
                <td class="invisible">
                    <button id="${item.id}" class="BtnEliminar">Eliminar</button>
                    <button id="${item.id}" class="BtnModificar">Modificar</button>
                </td>
                </tr>`
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}

async function ObtenerRegistroMayor(){
    let tablaDom = document.querySelector("#tablainicio");
    tablaDom.innerHTML = '';
    try {
        let respuesta = await fetch(`${url}?page=${pagina}&limit=10`);
        let json =  await respuesta.json();
        for (const item of json) {
            if(item.precio >= 500){
            tablaDom.innerHTML += `
                <tr>
                <td> ${item.nombre}</td>
                <td> $${item.precio}</td>
                <td> ${item.nro_compra}</td>
                <td class="invisible">
                    <button id="${item.id}" class="BtnEliminar">Eliminar</button>
                    <button id="${item.id}" class="BtnModificar">Modificar</button>
                </td>
                </tr>`
            }
        }
    }
    catch (error) {
        console.log(error);
    }
}


const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

burger.addEventListener('click',function(){
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