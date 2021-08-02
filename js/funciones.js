export function validarObj(pacienteObj){
    return !Object.values(pacienteObj).every(input => input !== '')
}

export function mostrarAlerta(mensaje){
    const existeAlerta = document.querySelector('.alert');
    const formulario = document.querySelector('.formulario');


    if(!existeAlerta){
        const alerta = document.createElement('p');
        alerta.classList.add('alert', 'alert-danger', 'text-center', 'p-2', 'border', 'border-danger', 'mt-3');
        alerta.textContent = mensaje

        formulario.appendChild(alerta)
    
        setTimeout(() => {
            alerta.remove()
        },3000)

    }
}