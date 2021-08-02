import { validarObj, mostrarAlerta } from "./funciones.js";
import { agregarPacienteAPI } from "./API.js";

(function(){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarFormulario);

    function validarFormulario(e){
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const telefono = Number(document.querySelector('#telefono').value);
        const fecha = document.querySelector('#fecha').value;
        const hora = document.querySelector('#hora').value;

        const pacienteObj = {
            nombre,
            telefono,
            fecha,
            hora,
        }

        console.log(pacienteObj)

        if(validarObj(pacienteObj)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        agregarPacienteAPI(pacienteObj)
        
        
    }

    
})();