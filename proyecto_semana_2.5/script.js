const navbar = document.getElementById("navbar");
        
    const fragment_navbar = document.createDocumentFragment();
    
    const principal_NB = document.createElement("nav");
    principal_NB.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-warning");
    fragment_navbar.appendChild(principal_NB);

    const div_container = document.createElement("div");
    div_container.setAttribute("class", "container-fluid w-100");
    principal_NB.appendChild(div_container);
    
    const logo = document.createElement("a");
    logo.setAttribute("class", "navbar-brand py-4 px-3");
    div_container.appendChild(logo);

    const imagen_logo = document.createElement("img");
    imagen_logo.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/8/82/Pop_Network_Logo.png");
    imagen_logo.setAttribute("width", "75px");
    logo.appendChild(imagen_logo);

    const botones_NB = document.createElement("button");
    botones_NB.setAttribute("class", "navbar-toggler");
    botones_NB.setAttribute("type", "button");
    botones_NB.setAttribute("data-bs-toggle", "collapse");
    botones_NB.setAttribute("data-bs-target", "#navbarNav");
    botones_NB.setAttribute("aria-controls", "navbarNav");
    botones_NB.setAttribute("aria-expanded", "false");
    botones_NB.setAttribute("aria-label", "Toggle navigation");
    div_container.appendChild(botones_NB);

    const div_span = document.createElement("span");
    div_span.setAttribute("class", "navbar-toggler-icon");
    botones_NB.appendChild(div_span);

    const div_collapse = document.createElement("div");
    div_collapse.setAttribute("class", "collapse navbar-collapse");
    div_collapse.setAttribute("id", "navbarNav");
    div_container.appendChild(div_collapse);

    const ul_NB = document.createElement("ul");
    ul_NB.setAttribute("class", "navbar-nav");
    div_collapse.appendChild(ul_NB);

    const inicio_NB = document.createElement("li");
    inicio_NB.setAttribute("class", "nav-item");
    ul_NB.appendChild(inicio_NB);

    const link_inicio = document.createElement("a");
    link_inicio.setAttribute("class", "nav-link active text-dark h5 px-3");
    link_inicio.setAttribute("aria-current", "page");
    link_inicio.setAttribute("href", "...");
    link_inicio.textContent = "Inicio";
    inicio_NB.appendChild(link_inicio);

    const colecciones_NB = document.createElement("li");
    colecciones_NB.setAttribute("class", "nav-item");
    ul_NB.appendChild(colecciones_NB);

    const link_colecciones = document.createElement("a");
    link_colecciones.setAttribute("class", "nav-link active text-dark h5 px-3");
    link_colecciones.setAttribute("aria-current", "page");
    link_colecciones.setAttribute("href", "...");
    link_colecciones.textContent = "Colecciones";
    colecciones_NB.appendChild(link_colecciones);

    const historia_NB = document.createElement("li");
    historia_NB.setAttribute("class", "nav-item");
    ul_NB.appendChild(historia_NB);

    const link_historia = document.createElement("a");
    link_historia.setAttribute("class", "nav-link active text-dark h5 px-3");
    link_historia.setAttribute("aria-current", "page");
    link_historia.setAttribute("href", "...");
    link_historia.textContent = "Historia";
    ul_NB.appendChild(link_historia);

    navbar.appendChild(fragment_navbar);

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
        
    const fragment_cards = document.createDocumentFragment();
    
    const principal = document.createElement("div");
    principal.setAttribute("class", "card m-1");
    principal.setAttribute("style", "width: 18rem");
    fragment_cards.appendChild(principal);
    
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
    
    tarjeta.appendChild(fragment_cards);

});