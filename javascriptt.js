function validar (){
    var nombre = document.getElementById("Nombre").value;
    var mail = document.getElementById("Correo").value;
    var mensaje = document.getElementById("mensaje").value;



    if ((nombre == "") || (nombre == "") || (mensaje == "")) {
        alert("NO PUEDE HABER CAMPOS VACIOS");
        return true;
    }

    else {
        alert ("Gracias por tu consulta " + nombre)
    }

}