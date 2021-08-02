const url = 'http://localhost:4000/citas';

export async function agregarPacienteAPI(pacienteObj){
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(pacienteObj),
            headers: {
                "Content-Type": "application/json"
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error)
    }
}

export async function extrearPacientesAPI(){
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        return resultado
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarPacienteAPI(pacienteId){
    try {
        await fetch(`${url}/${pacienteId}`, {
            method: 'DELETE',
        })
    } catch (error) {
        console.log(error)
    }
}


export async function extrarPacienteEditar(pacienteId){
    try {
        const respuesta = await fetch(`${url}/${pacienteId}`);
        const resultado = await respuesta.json();
        return resultado;
    } catch (error) {
        console.log(error)
    }
}

export async function guardarClienteEditado(pacienteEditadoObj){
    try {
        await fetch(`${url}/${pacienteEditadoObj.id}`, {
            method: 'PUT',
            body: JSON.stringify(pacienteEditadoObj),
            headers: {
                "Content-Type": "application/json"
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error)
    }
}