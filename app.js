function validarCampos(){
    var formulario = document.form;
    var mensaje = document.getElementById("mensaje");
    var message = "";
    if(formulario.nombre.value == ""){
        message+="Nombre no ingresado <br>"
    }
    if(formulario.apellido.value == ""){
        message+="Apellido no ingresado <br>";
    }
    if(formulario.direccion.value == ""){
        message+="Direccion no ingresada <br>";
    }
    if(formulario.telefono.value == ""){
        message+="Telefono no ingresado <br>";
    }
    if(formulario.email.value == ""){
        message+="Email no ingresado <br>";
    }
    
    mensaje.innerHTML = message;
}

function VerificarRespuesta(){
    var formulario = document.form;
    var num = 0;
    if(formulario.b1.checked){
        num++;
    }
    if(formulario.c2.checked){
        num++;
    }
    if(formulario.b3.checked){
        num++;
    }
    if(formulario.a4.checked){
        num++;
    }
    alert("Respuestas correctas: " + num)
}

function verificarNumero(){
    var numero = document.getElementById("numero");
    if(numero.value == ""){
        alert("Escriba un numero");
    }
    else{
        if(!isNaN(numero.value)){ 
            alert(numero.value.length);
        }else{
            alert("No es un numero");
        } 
    }
}

function redireccionar(){
    var formulario = document.form;
    var url;
    if(!formulario.google.checked && !formulario.bing.checked && !formulario.yahoo.checked && !formulario.ask.checked){
        alert("Por favor seleccione una")
    }
    else{
        if(formulario.google.checked){
            url = "http://www.google.com";
        }
        if(formulario.bing.checked){
            url = "http://www.bing.com";
        }
        if(formulario.yahoo.checked){
            url = "http://www.yahoo.com";
        }
        if(formulario.ask.checked){
            url = "http://www.ask.com";
        }
        window.location.href = url;
    }
}