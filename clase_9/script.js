/*const lista = document.getElementById("lista");
console.log(lista);

let conjunto = ["primer elemento", "segundo elemento", "tercer elemento"]

conjunto.forEach(element => {
  
    const eleLista = document.createElement("li");

    eleLista.textContent = element;

    eleLista.setAttribute("id", "elemento")

    lista.appendChild(eleLista);

});

lista.setAttribute("class", "d-flex text-danger")*/


/*
const tarjeta = document.getElementById("tarjeta");
tarjeta.setAttribute("class", "w-50 text-center mx-auto")

const principal = document.createElement("div");
principal.setAttribute("class", "card")
tarjeta.appendChild(principal);

const imagen = document.createElement("img");
imagen.src = "https://www.researchgate.net/profile/Maria-Monreal/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png"
imagen.setAttribute("class", "card-img-top")
tarjeta.appendChild(imagen);

const cuerpo = document.createElement("div");
cuerpo.setAttribute("class", "card-body")
tarjeta.appendChild(cuerpo);

const titulo = document.createElement("h5");
titulo.setAttribute("class", "card-title")
titulo.textContent = "Card title";
tarjeta.appendChild(titulo);

const texto = document.createElement("p");
texto.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content."
texto.setAttribute("class", "card-text")
tarjeta.appendChild(texto);

const boton = document.createElement("a");
boton.textContent = "Go somewhere"
boton.setAttribute("class", "btn btn-primary")
tarjeta.appendChild(boton);*/


const tarjeta = document.getElementById("tarjeta");
tarjeta.setAttribute("class", "w-50 text-center mx-auto")

const fragment = document.createDocumentFragment()

    const principal = document.createElement("div");
    principal.setAttribute("class", "card")
    fragment.appendChild(principal);

    const imagen = document.createElement("img");
    imagen.src = "https://www.researchgate.net/profile/Maria-Monreal/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png"
    imagen.setAttribute("class", "card-img-top")
    fragment.appendChild(imagen);

    const cuerpo = document.createElement("div");
    cuerpo.setAttribute("class", "card-body")
    fragment.appendChild(cuerpo);

    const titulo = document.createElement("h5");
    titulo.setAttribute("class", "card-title")
    titulo.textContent = "Card title";
    fragment.appendChild(titulo);

    const texto = document.createElement("p");
    texto.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content."
    texto.setAttribute("class", "card-text")
    fragment.appendChild(texto);

    const boton = document.createElement("a");
    boton.textContent = "Go somewhere"
    boton.setAttribute("class", "btn btn-primary")
    fragment.appendChild(boton);

tarjeta.appendChild(fragment);
