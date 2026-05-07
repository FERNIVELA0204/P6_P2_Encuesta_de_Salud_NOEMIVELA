const dolor = document.getElementById("dolor");
const valorDolor = document.getElementById("valorDolor");
const formulario = document.getElementById("formulario");

// Mostrar el valor del rango
dolor.addEventListener("input", () => {
    valorDolor.textContent = dolor.value;
});

// Validación del formulario
formulario.addEventListener("submit", function(event){

    // Obtener valores
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const peso = document.getElementById("peso").value;
    const cp = document.getElementById("cp").value;
    const sangre = document.getElementById("sangre").value;

    // Validar nombre
    if(nombre.length < 5){
        alert("El nombre debe tener al menos 5 caracteres");
        event.preventDefault();
        return;
    }

    // Validar edad
    if(edad < 1 || edad > 120){
        alert("La edad debe estar entre 1 y 120");
        event.preventDefault();
        return;
    }

    // Validar peso
    if(peso < 20 || peso > 250){
        alert("El peso debe estar entre 20 y 250 kg");
        event.preventDefault();
        return;
    }

    // Validar tipo de sangre
    if(sangre === ""){
        alert("Selecciona un tipo de sangre");
        event.preventDefault();
        return;
    }

    // Validar código postal
    const regexCP = /^[0-9]{5}$/;

    if(!regexCP.test(cp)){
        alert("El código postal debe tener exactamente 5 números");
        event.preventDefault();
        return;
    }

    // Mensaje final
    alert("Formulario enviado correctamente");
});
