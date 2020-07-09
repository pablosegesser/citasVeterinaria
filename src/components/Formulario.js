import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';


const Formulario = ({crearCita}) => {

//Crear state de citas
const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''


});
//state de error

const [error, actualizarError] = useState(false);

// funcion que se ejecuta cada que el usuario escribe en el input
const actualizarState = e => {
actualizarCita({
    ...cita,
    [e.target.name]: e.target.value
})

}

//extraer valores

const { mascota, propietario, fecha, hora, sintomas } = cita;

//cuando se aprieta el boton agregar cita

const submitCita = e =>{
e.preventDefault();
//validar
if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){
actualizarError(true);
return;

}
//eliminar mensaje de error
actualizarError(false);

//asignar un id
cita.id = uuid();
//crear la cita
crearCita(cita);
//reiniciar el form
actualizarCita({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
})

}

    return(
        <Fragment>
            <h2>Crear Cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null }


            <form
            onSubmit={submitCita}
            
            >
                <label>Nombre de Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}

                />
                <label>Nombre de Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                 <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                 <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                 <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar cita
                </button>
            </form>

        </Fragment>

    );



}

export default Formulario;