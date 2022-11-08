let crearTarjetas = 
[
    {
        cont_titulo: "Card #1",
        cont_texto: "Texto para card 1",
        cont_boton: "Pulsame 1"
    },
    {
        cont_titulo: "Card #2",
        cont_texto: "Texto para card 2",
        cont_boton: "Pulsame 2"
    },
    {
        cont_titulo: "Card #3",
        cont_texto: "Texto para card 3",
        cont_boton: "Pulsame 3"
    },
    {
        cont_titulo: "Card #4",
        cont_texto: "Texto para card 4",
        cont_boton: "Pulsame 4"
    },
    {
        cont_titulo: "Card #5",
        cont_texto: "Texto para card 5",
        cont_boton: "Pulsame 5"
    },
    {
        cont_titulo: "Card #6",
        cont_texto: "Texto para card 6",
        cont_boton: "Pulsame 6"
    },
]

crearTarjetas.forEach(element => {

    const tarjeta = document.getElementById("tarjeta");
        
    const fragment = document.createDocumentFragment();
    
    const principal = document.createElement("div");
    principal.setAttribute("class", "card m-1");
    principal.setAttribute("style", "width: 18rem");
    fragment.appendChild(principal);
    
    const imagen = document.createElement("img");
    imagen.src = "https://www.researchgate.net/profile/Maria-Monreal/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png";
    imagen.setAttribute("class", "card-img-top");
    principal.appendChild(imagen);
    
    const cuerpo = document.createElement("div");
    cuerpo.setAttribute("class", "card-body");
    principal.appendChild(cuerpo);
    
    const titulo = document.createElement("h5");
    titulo.setAttribute("class", "card-title");
    titulo.textContent = element.cont_titulo;
    cuerpo.appendChild(titulo);
    
    const texto = document.createElement("p");
    texto.textContent = element.cont_texto;
    texto.setAttribute("class", "card-text");
    cuerpo.appendChild(texto);
    
    const boton = document.createElement("a");
    boton.textContent = element.cont_boton;
    boton.setAttribute("class", "btn btn-primary");
    cuerpo.appendChild(boton);
    
    tarjeta.appendChild(fragment);

});