let esValido = false
let nombreEsValido = false
let contraEsValido = false
let Mailingreso= false;
let sonIguales = false

const validarNLongitud = () => 
{
    let nombre= document.getElementById("nombre").value;
    let mensajeError = document.getElementById("mensajeError"); 
   
    if(nombre.length >= 3)
    {
        mensajeError.innerHTML = "Es Valido";
        nombreEsValido = true
        mensajeError.style.color = "Green"
    }
    else{
        mensajeError.innerHTML = "El nombre completo debe tener al menos 3 caracteres";
        nombreEsValido = false
        mensajeError.style.color = "Red"
    }
}
const ValidarMail = () =>
{
    let mail= document.getElementById("email");

    if(mail != "")
    {
        Mailingreso = true;
    }
    else {
        Mailingreso = false;
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
        contraEsValido = true
        errorPassword.style.color = "Green"
    }
    else
    {
        errorPassword.innerHTML = "Debe contener 8 caracteres, una letra y un numero"
        contraEsValido = false
        errorPassword.style.color = "Red"
    }

    if(Password == ConfirmarPassword)
    {
        errorConfirmarPassword.innerHTML = "Es valido"
        sonIguales = true
        errorConfirmarPassword.style.color = "Green"
    }
    else
    {
        errorConfirmarPassword.innerHTML = "Las constraseñas no coinciden"
        sonIguales = false
        errorConfirmarPassword.style.color = "Red"
    }
}

const Regirtrarse = () =>
{
    if(contraEsValido == true && nombreEsValido == true && sonIguales == true && Mailingreso == true){
        esValido = true
        alert("se ha registrado correctamente")
    }
    else {
        esValido = false
    }
    return esValido
}
