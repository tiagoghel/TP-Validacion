const validarNLongitud = () => 
{
    let nombre= document.getElementById("nombre").value;
    let mensajeError = document.getElementById("mensajeError"); 
   
    if(nombre.length >= 3)
    {
        
        mensajeError.innerHTML = "Es Valido";
        mensajeError.style.color = "Green"
    }
    else{
        
        mensajeError.innerHTML = "El nombre completo debe tener al menos 3 caracteres";
        mensajeError.style.color = "Red"
    }
}


const MostrarMensaje = () =>
{
    let Password = document.getElementById("password").value;
    let ConfirmarPassword = document.getElementById("ConfirmarPassword").value;
    let errorPassword = document.getElementById("errorPassword");
    let errorConfirmarPassword = document.getElementById("errorConfirmarPassword");

    if(Password.length >= 8 && (/[1234567890]/.test(Password)) && (/[a-z]/.test(Password))) 
    {
        errorPassword.innerHTML = "Es valida la contraseña"
        esValido = true
    }
    else
    {
        errorPassword.innerHTML = "Debe contener 8 caracteres, una letra y un numero"
        esValido = false

    }

    if(ConfirmarPassword != Password)
    {
        errorConfirmarPassword.innerHTML = "Las constraseñas no coinciden"
        esValido = false

    }
    else 
    {
        errorConfirmarPassword.innerHTML = "Es valido"
        esValido = true
    }

    return esValido
}

const Regirtrarse = () => {
    return esValido

}