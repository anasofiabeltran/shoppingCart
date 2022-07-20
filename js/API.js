import { add,less } from "./index.js";

const URL = "https://pokeapi.co/api/v2/pokemon/"

function crearProducto(seccion,numeroInicio){
    for(let i=1; i<9; i++){
        fetch(`${URL}${numeroInicio+i}`)
        .then(respuesta => respuesta.json())
        .then(data => {
            
            const div = document.createElement("div");
            const img = document.createElement("img");
            const divInfoCart = document.createElement("div");
            const h5 = document.createElement("h5");
            const p = document.createElement("p");
            const divBotones = document.createElement("div");
            const botonSumar = document.createElement("button");
            const cantidadInput = document.createElement("input");
            const botonRestar = document.createElement("button");

            div.className = "card";
            img.src = data.sprites.front_default;
            img.className = "card-img-top";
            divInfoCart.className ="card-body";
            h5.className="card-title";
            h5.textContent=data.name;
            p.className = "card-text";
            p.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content";
            botonSumar.onclick = () => add(data.name);
            botonSumar.textContent = "+";
            cantidadInput.type = "text";
            cantidadInput.id=`quantity_of_products_${data.name}`;
            cantidadInput.value="0";
            botonRestar.onclick = () =>less(data.name);
            botonRestar.textContent="-";

            divBotones.append(botonSumar,cantidadInput,botonRestar);
            divInfoCart.append(h5,p,divBotones);
            div.append(img,divInfoCart);
            seccion.append(div);
        })
    }
}

function cargarSeccionProductosContenido(){
    const seccionProductosContenido = document.querySelector('#section-products_content');
    const seccion1 = document.createElement("section")
    crearProducto(seccion1,200);
    seccion1.id="section1";
    seccionProductosContenido.append(seccion1);



    const seccion2 = document.createElement("section")
    crearProducto(seccion2,150);
    seccion2.id="section2";
    seccionProductosContenido.append(seccion2);

}




function cargarCategoriasContainerImagenes(){
    const categoriasContainerImagenes = document.querySelector('#categories-container_imagenes');
    for(let i=1; i<4; i++){
        fetch(`${URL}${120+i}`)
        .then(respuesta => respuesta.json())
        .then(data => {
            const div = document.createElement("div");
            const img =  document.createElement("img");

            div.className = "categories-imagenes";
            img.src= data.sprites.front_default;

            div.append(img);
            categoriasContainerImagenes.append(div);
        })
    }
}



function cargarCategoriasProductos(){
    const categoriesProductos =document.querySelector('#categories-productos');
    for(let i=1; i<11; i++){
        fetch(`${URL}${i}`)
        .then(respuesta => respuesta.json())
        .then(data => {
            const boton=document.createElement("button");
            const figure=document.createElement("figure");
            const imagen= document.createElement("img");
            const p= document.createElement("p");
            const figCaption = document.createElement("figcaption");

            imagen.src= data.sprites.front_default;
            p.textContent=data.name;

            figCaption.append(p);
            figure.append(imagen,figCaption);
            boton.append(figure);
            categoriesProductos.append(boton);

        })
    }
}

cargarCategoriasProductos();
cargarCategoriasContainerImagenes();
cargarSeccionProductosContenido();
