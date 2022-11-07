console.log("Hola Profes 💜")


let formulario = document.querySelector("form")

formulario.addEventListener("submit", (event) => {
    /*     event.preventDefault()
     */
    let datoExtraido = localStorage.getItem("misDatos")

    let datosAlmacenados;

    if (datoExtraido == undefined) {
        datosAlmacenados = []
    } else {
        datosAlmacenados = JSON.parse(datoExtraido)
    }


    let datosNuevos = {
        nombre: event.target.name.value,
        apellido: event.target.lastname.value,
        correo: event.target.email.value,
    }

    datosAlmacenados.push(datosNuevos)
    console.log(datosAlmacenados)

    let misDatos = JSON.stringify(datosAlmacenados)

    localStorage.setItem("misDatos", misDatos)
    console.log(localStorage)

    formulario.reset()
})

// FUNCION CREAR LAS TARJETAS DE LOS REGISTROS
let output = document.querySelector(".output")

function crearTarjetas(_texto) {

    let parrafo = document.createElement("p")
    let texto = document.createTextNode(_texto)
    parrafo.appendChild(texto)
    output.appendChild(parrafo)

    return parrafo
}

// OBTENEMOS LOS DATOS DEL LOCAL STORAGE PARA MOSTRARLOS

let datosAMostrar = JSON.parse(localStorage.getItem("misDatos"))

datosAMostrar.forEach(element => {

    let nombre = element.nombre
    let apellido = element.apellido
    let correo = element.correo

    crearTarjetas("Bienvenide " + nombre + " " + apellido + ", tu correo registrado es: " + correo)

});

// VALIDADORES

let myName = document.querySelectorAll("input")

myName.forEach(myName => {
    myName.addEventListener("input", () => {
        myName.setCustomValidity("");

        myName.checkValidity();

    })
    myName.addEventListener("invalid", () => {
        myName.setCustomValidity("Por favor llena todos los campos 🤨")

    })
})

let myEmail = document.querySelector("#email")
myEmail.addEventListener("input", () => {
    myEmail.setCustomValidity("");

    myEmail.checkValidity();

})
myEmail.addEventListener("invalid", () => {
    myEmail.setCustomValidity("Esto no parece un correo válido ")

})

// PREGUNTAR POR QUÉ NO FUNCIONÓ  😥

/* 
let myPassword = document.querySelector("#password")

myPassword.addEventListener("input", () => {

    if (myPassword.length < 8) {
        myPassword.setCustomValidity('Mínimo 8 caracteres 🙈'); // preparar
        myPassword.reportValidity(); // mostrar

        } else {
        myPassword.setCustomValidity(''); // preparar

        }
})

 */


