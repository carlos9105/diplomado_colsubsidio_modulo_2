// INICIO NAVBAR

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

// FIN NAVBAR

// INICIO INFO

    const info = document.getElementById("info");

    const fragment_info = document.createDocumentFragment();
    
    const principal_info = document.createElement("div");
    principal_info.setAttribute("class", "w-100 bg-info");
    fragment_info.appendChild(principal_info);
    
    const texto_info = document.createElement("h1");
    texto_info.setAttribute("class","text-light text-center py-4");
    texto_info.textContent="¡Tenemos más de 1.000 Funko pop para elegir!";
    principal_info.appendChild(texto_info);
    
    info.appendChild(fragment_info);
    
// FIN INFO

// INICIO CARDS

let crearTarjetas = 
[
    {
        cont_imagen: "./Imagenes/Avengers_01.jpg",
        cont_titulo: "Funko Pop Marvel: Captain Carter",
        cont_3linea: "25cm",
        cont_4linea: "$85.900",
    },
    {
        cont_imagen: "./Imagenes/Disney_01.jpg",
        cont_titulo: "Funko Pop Disney: Cinderella",
        cont_3linea: "23cm",
        cont_4linea: "$75.500",
    },
    {
        cont_imagen: "./Imagenes/Harry_potter_01.JPG",
        cont_titulo: "Funko Pop Harry Potter",
        cont_3linea: "27cm",
        cont_4linea: "$89.900",
    },
    {
        cont_imagen: "./Imagenes/Cartoon_network_01.JPG",
        cont_titulo: "Funko Pop Johny Bravo",
        cont_3linea: "26cm",
        cont_4linea: "$85.500",
    },
    {
        cont_imagen: "./Imagenes/Harry_potter_02.jpg",
        cont_titulo: "Funko Pop Ron Weasley",
        cont_3linea: "24cm",
        cont_4linea: "$60.000",
    },
    {
        cont_imagen: "./Imagenes/Avengers_03.JPG",
        cont_titulo: "Funko Pop Marvel: Ironman",
        cont_3linea: "28cm",
        cont_4linea: "$95.900",
    },
]

function createCard(element){

    const grupoTarjetas = document.getElementById("grupoTarjetas");

    const fragment_tarjeta = document.createDocumentFragment();

    const principal_tarjeta = document.createElement("div");
    principal_tarjeta.setAttribute("class","col-lg-3 col-md-6 col-sm-6 px-2 py-2");
    fragment_tarjeta.appendChild(principal_tarjeta);

    const div2_tarjeta = document.createElement("div");
    div2_tarjeta.setAttribute("class","card h-100 d-flex align-items-center");
    principal_tarjeta.appendChild(div2_tarjeta);

    const contenedor_imagen = document.createElement("div");
    contenedor_imagen.setAttribute("class","col-10 h-50 mx-auto d-flex align-items-center py-5");
    div2_tarjeta.appendChild(contenedor_imagen);

    const imagen_tarjeta = document.createElement("img");
    imagen_tarjeta.setAttribute("class","card-img-top");
    imagen_tarjeta.setAttribute("src",element.cont_imagen);
    contenedor_imagen.appendChild(imagen_tarjeta);

    const contenedor_cuerpo = document.createElement("div");
    contenedor_cuerpo.setAttribute("class","card-body h-50 d-flex flex-wrap align-items-center text-dark bg-light w-100 justify-content-center text-center");
    div2_tarjeta.appendChild(contenedor_cuerpo);

    const cuerpo_titulo = document.createElement("h6");
    cuerpo_titulo.textContent = element.cont_titulo;
    contenedor_cuerpo.appendChild(cuerpo_titulo);

    const cuerpo_1linea = document.createElement("p");
    cuerpo_1linea.textContent = "-";
    cuerpo_1linea.setAttribute("class","w-100");
    contenedor_cuerpo.appendChild(cuerpo_1linea);

    const cuerpo_2linea = document.createElement("p");
    cuerpo_2linea.textContent = "Funko";
    cuerpo_2linea.setAttribute("class","w-100");
    contenedor_cuerpo.appendChild(cuerpo_2linea);

    const cuerpo_3linea = document.createElement("p");
    cuerpo_3linea.textContent = element.cont_3linea;
    cuerpo_3linea.setAttribute("class","w-100");
    contenedor_cuerpo.appendChild(cuerpo_3linea);

    const cuerpo_4linea = document.createElement("p");
    cuerpo_4linea.textContent = element.cont_4linea;
    cuerpo_4linea.setAttribute("class","w-100");
    contenedor_cuerpo.appendChild(cuerpo_4linea);

    grupoTarjetas.appendChild(fragment_tarjeta);

}

crearTarjetas.forEach(element => createCard(element));