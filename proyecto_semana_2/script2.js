let crearTarjetas = 
[
    {
        contTitulo: "Card #1",
        contTexto: "Texto para card 1",
        contBoton: "Pulsame 1"
    },
    {
        contTitulo: "Card #2",
        contTexto: "Texto para card 2",
        contBoton: "Pulsame 2"
    },
    {
        contTitulo: "Card #3",
        contTexto: "Texto para card 3",
        contBoton: "Pulsame 3"
    },
    {
        contTitulo: "Card #4",
        contTexto: "Texto para card 4",
        contBoton: "Pulsame 4"
    },
    {
        contTitulo: "Card #5",
        contTexto: "Texto para card 5",
        contBoton: "Pulsame 5"
    },
    {
        contTitulo: "Card #6",
        contTexto: "Texto para card 6",
        contBoton: "Pulsame 6"
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
    titulo.textContent = element.contTitulo;
    cuerpo.appendChild(titulo);
    
    const texto = document.createElement("p");
    texto.textContent = element.contTexto;
    texto.setAttribute("class", "card-text");
    cuerpo.appendChild(texto);
    
    const boton = document.createElement("a");
    boton.textContent = element.contBoton;
    boton.setAttribute("class", "btn btn-primary");
    cuerpo.appendChild(boton);
    
    tarjeta.appendChild(fragment);

});