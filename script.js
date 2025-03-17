function validarLongitud()
{
    let nombre= document.getElementById("nombre").value;
    let mensajeError = document.getElementById("mensajeError"); 
   
    if(nombre.length >= 3 || nombre.length==0)
    {
        
        mensajeError.innerHTML = "";
        return true;
    }
    else{
        
        mensajeError.innerHTML = "El nombre completo debe tener al menos 3 caracteres";
        return false;
    }
}

function MostrarMensaje()
{
    let ConfirmarPassword= document.getElementById("ConfirmarPassword").value;
    let Password= document.getElementById("password").value;
    let error= document.getElementById("errorPassword").value;

    if(ConfirmarPassword !== password)
    {
        error.innerHTML="Las constraseñas no coinciden"
        return false
    }
}