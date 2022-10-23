function test(param1, param2) {

    if (typeof param2 === "string") {


        for (filas = 0; filas < param1; filas++) {
            patron = ""

            for (columnas = 0; columnas < param1; columnas++) {
                patron = patron + param2
            }

            console.log(patron);

        }

    }

    if (typeof param2 === "undefined") {


        for (filas = 0; filas < param1; filas++) {
            patron = ""

            for (columnas = 0; columnas < param1; columnas++) {
                patron = patron + "X"
            }

            console.log(patron);

        }

    }

    if (typeof param1 === "undefined") {
        console.log("Missing Size");
    }


}

test(5, "O")