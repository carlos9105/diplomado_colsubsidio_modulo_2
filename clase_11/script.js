function test(numCards){
    
    for(let x=0; x < numCards; x++){
        
        const tarjeta = document.getElementById("tarjeta");
        
        const fragment = document.createDocumentFragment()
        
        const principal = document.createElement("div");
        principal.setAttribute("class", "card m-1")
        principal.setAttribute("style", "width: 18rem")
        fragment.appendChild(principal);
        
        const imagen = document.createElement("img");
        imagen.src = "https://www.researchgate.net/profile/Maria-Monreal/publication/315108532/figure/fig1/AS:472492935520261@1489662502634/Figura-2-Avatar-que-aparece-por-defecto-en-Facebook.png"
        imagen.setAttribute("class", "card-img-top")
        principal.appendChild(imagen);
        
        const cuerpo = document.createElement("div");
        cuerpo.setAttribute("class", "card-body")
        principal.appendChild(cuerpo);
        
        const titulo = document.createElement("h5");
        titulo.setAttribute("class", "card-title")
        titulo.textContent = "Card title";
        cuerpo.appendChild(titulo);
        
        const texto = document.createElement("p");
        texto.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content."
        texto.setAttribute("class", "card-text")
        cuerpo.appendChild(texto);
        
        const boton = document.createElement("a");
        boton.textContent = "Go somewhere"
        boton.setAttribute("class", "btn btn-primary")
        cuerpo.appendChild(boton);
        
        tarjeta.appendChild(fragment)

    }

}

test(5);