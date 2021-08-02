import { extrarPacienteEditar, guardarClienteEditado } from "./API.js";
import { validarObj, mostrarAlerta } from "./funciones.js";

(function() {
    const nombreInput = document.querySelector('#nombre-paciente')
    const telefonoInput = document.querySelector('#telefono-paciente')
    const fechaInput = document.querySelector('#fecha-paciente')
    const horaInput = document.querySelector('#hora-paciente');
    const idInput = document.querySelector('#hidden')
    
    const formulario = document.querySelector('.formulario');
    formulario.addEventListener('submit', validarFormulario)

    window.addEventListener('DOMContentLoaded', editarPaciente);

    async function editarPaciente(){
        const parametrosURL = new URLSearchParams(window.location.search);
        const pacienteId = Number(parametrosURL.get('id'));

        const pacienteEditar = await extrarPacienteEditar(pacienteId);
        
        llenarInputs(pacienteEditar)
    }

    function llenarInputs(pacienteEditar){
        const {nombre,telefono,fecha,hora,id} = pacienteEditar;

        nombreInput.value = nombre;
        telefonoInput.value = telefono;
        fechaInput.value = fecha;
        horaInput.value = hora;
        idInput.value = id;
    }

    function validarFormulario(e){
        e.preventDefault();

        const pacienteEditadoObj = {
            nombre: nombreInput.value,
            telefono: telefonoInput.value,
            fecha: fechaInput.value,
            hora: horaInput.value,
            id: Number(idInput.value),
        }

        
        if(validarObj(pacienteEditadoObj)){
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        guardarClienteEditado(pacienteEditadoObj)

    }
})();