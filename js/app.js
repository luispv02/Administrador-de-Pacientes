import { extrearPacientesAPI, eliminarPacienteAPI } from "./API.js";

(function(){
    const listaPacientes = document.querySelector('#lista-pacientes');
    listaPacientes.addEventListener('click', eliminarPacienteId)

    window.addEventListener('DOMContentLoaded', mostrarPacientes)

    async function mostrarPacientes(){
        const pacientes = await extrearPacientesAPI();
        
        pacientes.forEach(paciente => {
            const {nombre, telefono, fecha, hora, id} = paciente;

            const row = document.createElement('tr');

            row.innerHTML = `
                <tr>
                    <th>${id}</th>
                    <td>${nombre}</td>
                    <td>${telefono}</td>
                    <td>${fecha}</td>
                    <td>${hora}</td>
                    <td>
                        <a href="editar-paciente.html?id=${id}">
                            <img src="img/editar.svg"class="icono-editar">
                        </a>
                    </td>
                    <td>
                        <a href="#" data-paciente="${id}">
                            <img src="img/trash.svg" class="icono-eliminar">
                        </a>
                    </td>
                </tr>
            `

            listaPacientes.appendChild(row)
        })
    }

    function eliminarPacienteId(e){
        if(e.target.classList.contains('icono-eliminar')){
            const pacienteId = Number(e.target.parentElement.dataset.paciente);
            const confirmarEliminar = confirm('¿ Deseas eliminar este paciente ?');

            if(confirmarEliminar){
                eliminarPacienteAPI(pacienteId)
                
            }

        }
    }

})();