const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let usuario = document.getElementById("usuario").value;
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;
    let fecha_nacimiento = document.getElementById("fecha").value;

    if (nombre === "") {
        alert("Por favor, ingrese su nombre.");
        return;
    }

    if (usuario === "") {
        alert("Por favor, ingrese su nombre de usuario.");
        return;
    }

    if (correo === "" || !correo.includes("@")) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    if (contraseña === "" || contraseña.length < 6) {
        alert("Por favor, ingrese una contraseña válida (mínimo 6 caracteres).");
        return;
    }

    if (fecha_nacimiento === "") {
        alert("Por favor, ingrese su fecha de nacimiento.");
        return;
    }

    alert("Registro exitoso! \n\nNombre: " + nombre + "\nUsuario: " + usuario + "\nCorreo: " + correo + "\nFecha de Nacimiento: " + fecha_nacimiento);
});
