import React, { useState } from 'react';
import { API } from '../../Services/Api';
import Navbar from '../Nav/Navbar';
import './Ingresos.css'
const initial_state = {
  
}

const Contacto = (value) => {
  
  const [formState, setFormState] = useState(initial_state);

  
  const handleInput = (ev) => {
      const { name, value } = ev.target;
      
      setFormState({ ...formState, [name]: value })

  }
  const handleClick = () => {
      API.post("/ingresos", formState)
          .then((res) => {
              console.log("abuelo cargado")
          })
  }

return (
  <div className='contenedor2'>
  <Navbar/>
  <h2>Ingrese un nuevo abuelo</h2>

  <form className='form' onSubmit={(ev) => ev.preventDefault()}>

  <label htmlFor="date">Fecha de ingreso:</label>
  <input type="date" id="date" name="date" onChange={handleInput} value={formState.fechaIngreso}/>

  <label htmlFor="imagen">foto de perfil:</label>
  <input type="file" id="imagen" name="imagen" onChange={handleInput} value={formState.perfil}/>

  <label htmlFor="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" onChange={handleInput} value={formState.nombre}/>

  <label htmlFor="apellido">Apellido:</label>
  <input type="text" id="nombre" name="apellido" onChange={handleInput} value={formState.apellido}/>

  <label htmlFor="doc">Numero de docuento:</label>
  <input type="text" id="doc" name="doc" onChange={handleInput} value={formState.documento}/>

  <label htmlFor="date">Fecha de nacimiento:</label>
  <input type="date" id="date" name="date" onChange={handleInput} value={formState.fechaNacimiento}/>
  
  <label htmlFor="nombre">Nacionalidad:</label>
  <input type="text" id="nombre" name="nombre" onChange={handleInput} value={formState.nacionalidad}/>

  <label htmlFor="nombre">Obra social:</label>
  <input type="text" id="nombre" name="nombre" onChange={handleInput} value={formState.prepaga}/>

  <label htmlFor="nombre">Numero de afiliado:</label>
  <input type="text" id="nombre" name="nombre" onChange={handleInput} value={formState.numeroAfiiado}/>
  
  <label htmlFor="nombre">Estado civil:</label>
  <input type="text" id="nombre" name="nombre" onChange={handleInput} value={formState.estadoCivil}/>

  <label htmlFor="nombre">Servicio de emergencia:</label>
  <input type="text" id="nombre" name="nombre" onChange={handleInput} value={formState.servicioEmergencia}/>

  <label htmlFor="number">Telefono de emergencia:</label>
  <input type="number" id="number" name="number" onChange={handleInput} value={formState.telefonoEmergencia}/>

  <label htmlFor="nombre">¿Autorizado a salir?:</label>
  <input type="text" id="nombre" name="nombre" onChange={handleInput} value={formState.autorizadoSalir}/>

  <label htmlFor="nombre">Nombre y apellido del familiar responsable:</label>
  <input type="text" id="nombre" name="nombre" onChange={handleInput} value={formState.nombrePariente}/>
  
  <label htmlFor="number">Documento del familiar:</label>
  <input type="number" id="number" name="number" onChange={handleInput} value={formState.documentoPariente}/>

  <label htmlFor="nombre">Parentezco:</label>
  <input type="text" id="nombre" name="nombre" onChange={handleInput} value={formState.parentezco}/>

  <label htmlFor="nombre">Domicilio:</label>
  <input type="text" id="nombre" name="nombre" onChange={handleInput} value={formState.domicilio}/>

  <label htmlFor="number">Telefono 1:</label>
  <input type="number" id="number" name="number" onChange={handleInput} value={formState.telefono1}/>

  <label htmlFor="number">Telefono 2:</label>
  <input type="number" id="number" name="number" onChange={handleInput} value={formState.telefono2}/>

  <label htmlFor="number">Telefono 3:</label>
  <input type="number" id="number" name="number" onChange={handleInput} value={formState.telefono3}/>
  
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" onChange={handleInput} value={formState.email}/>

  <label htmlFor="imagen">Foto de la documentacion:</label>
  <input type="file" id="imagen" name="imagen" onChange={handleInput} value={formState.imagen}/>
  
  <label htmlFor="comentario">Comentario:</label>
  <textarea id="comentario" name="comentario" onChange={handleInput} value={formState.comentario}></textarea>
  
  <input className='boton' type="submit" value="Enviar" name='submit' id='boton' onClick={handleClick}/>
  </form>
      
  </div>
)
}

export default Contacto