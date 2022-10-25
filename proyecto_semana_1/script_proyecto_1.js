function test(param1, param2 = "X") {

    if (typeof param1 === "undefined" || typeof param1 === "string") {
        console.log("Missing Size");
    }

    if (typeof param2 === "string") {


        for (filas = 0; filas < param1; filas++) {
            patron = ""

            for (columnas = 0; columnas < param1; columnas++) {
                patron = patron + param2
            }

            console.log(patron);

        }

    }

}

test(6)