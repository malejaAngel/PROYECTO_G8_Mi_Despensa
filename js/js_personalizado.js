function validacion_de_campos(){

    var boton_i_s = document.getElementById("boton_iniciar_sesion");
    var num_ced = document.getElementById("num_cedula").value;
    var nombre_complet = document.getElementById("nombre_completo").value;
    var correo_e = document.getElementById("correo_e").value;
    var formulario_i_s = document.getElementById("formulario_inicio_sesion"); //Captura todos los valores de todos los elementos que tengan id del formulario con id = formulario-inicio_sesion 
    var datos_ingresados_correctamente = true; 

    if(formulario_i_s.num_cedula.value == ""){
        formulario_i_s.num_cedula.setAttribute("class", "form-control is-invalid");
        var parrafo_num_cedula = document.getElementById("parrafo_validar_num_cedula");
        parrafo_num_cedula.innerHTML = "Error - Debe ingresar el numero su cédula";
        parrafo_num_cedula.setAttribute("class", "text-danger");
        datos_ingresados_correctamente = false;
    }

    else{
        formulario_i_s.num_cedula.setAttribute("class", "form-control is-valid");
        var parrafo_num_cedula = document.getElementById("parrafo_validar_num_cedula");
        parrafo_num_cedula.innerHTML ="El número de cédula se ingreso correctamente";
        parrafo_num_cedula.setAttribute("class", "text-success");
    }

    if(formulario_i_s.nombre_completo.value == ""){
        formulario_i_s.nombre_completo.setAttribute("class", "form-control is-invalid");
        var parrafo_nombre_completo = document.getElementById("parrafo_validar_nombre_completo");
        parrafo_nombre_completo.innerHTML = "Error - Debe ingresar su nombre completo";
        parrafo_nombre_completo.setAttribute("class", "text-danger");
        datos_ingresados_correctamente = false;
    }

    else{
        formulario_i_s.nombre_completo.setAttribute("class", "form-control is-valid");
        var parrafo_nombre_completo = document.getElementById("parrafo_validar_nombre_completo");
        parrafo_nombre_completo.innerHTML ="Su nombre se ingreso correctamente";
        parrafo_nombre_completo.setAttribute("class", "text-success");
    }

    if(formulario_i_s.correo_e.value == "" || formulario_i_s.correo_e.value.indexOf("@") == -1){
        formulario_i_s.correo_e.setAttribute("class", "form-control is-invalid");
        var parrafo_correo_e = document.getElementById("parrafo_validar_correo_e");
        parrafo_correo_e.innerHTML = "Error - Su correo electrónico no fue ingresado y/o esta incompleto";
        parrafo_correo_e.setAttribute("class", "text-danger");
        datos_ingresados_correctamente = false;
    }

    else{
        formulario_i_s.correo_e.setAttribute("class", "form-control is-valid");
        var parrafo_correo_e = document.getElementById("parrafo_validar_correo_e");
        parrafo_correo_e.innerHTML ="Su correo electrónico se ingreso correctamente";
        parrafo_correo_e.setAttribute("class", "text-success");
    }

    if(datos_ingresados_correctamente == true){

        boton_i_s.setAttribute("class", "btn btn-success");
        boton_i_s.setAttribute("disabled", "");
        boton_i_s.innerHTML="Inicio de Sesión => OK ::";
    }
}