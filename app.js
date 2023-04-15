var rut = document.getElementById('rut');
var apellidoPa = document.getElementById('apellidoPa');
var apellidoMa = document.getElementById('apellidoMa');
var nombre = document.getElementById('nombre');
var fechaNac = document.getElementById('fechaNac');
var edad = document.getElementById('edad');
var genero = document.getElementById('genero');
var email = document.getElementById('email');
var celular = document.getElementById('celular');
var motivacion = document.getElementById('motivacion');
var profesion = document.getElementById('profesion');


var error = document.getElementById('error');
error.style.color = 'red';


var form = document.getElementById('formulario');
    form.addEventListener('submit',function(evt){
        evt.preventDefault();
        
        var mensajesError = [];

    if(rut.value === null || rut.value === ''){
            mensajesError.push('Ingrese su rut')
    }

    if(apellidoPa.value === null || apellidoPa.value === ''){
        mensajesError.push('Apellido paterno')    
    }   

    if(apellidoMa.value === null || apellidoMa.value === ''){
        mensajesError.push('Apellido materno')    
    }


    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre')
    }

    if(password.value === null || password.value === ''){
        mensajesError.push('Ingresa tu password')
    }

        error.innerHTML = mensajesError.join(', ');    

});
