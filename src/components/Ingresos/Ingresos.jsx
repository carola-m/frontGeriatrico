import React, { useState } from 'react';
import Navbar from '../Nav/Navbar';
import './Ingresos.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const initial_state = {
    fechaIngreso: "",
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    nacionalidad: "",
    prepaga: "",
    estadoCivil: "",
    servicioEmergencia: "",
    telefonoEmergencia: "",
    autorizadoSalir: "",
    nombreParientes: "",
    documentoPariente: "",
    parentezco: "",
    domicilio: "",
    telefono1: "",
    telefono2: "",
    telefono3: "",
    email: "",
    documentoFrente: "",
    documentoDorso: "",
    prepagaFrente:"",
    prepagaDorso: "",
    comentario: "", 
    estado: "",
  
}
const Ingresos = (value) => {
  const [formState, setFormState] = useState(initial_state);
  const [imagen, setImagen] = useState("");

  const handleInput = (ev) => {
      const { name, value } = ev.target;
      
      setFormState({ ...formState, [name]: value })
  }

  const handleInput1 = (event) => {
    setImagen({ ...imagen, perfil: event.target.files[0] })
  }
  const handleInput2 = (event) => {
    setImagen({ ...imagen, documentoFrente: event.target.files[0] })
  }
  const handleInput3 = (event) => {
    setImagen({ ...imagen, documentoDorso: event.target.files[0] })
  }
  const handleInput4 = (event) => {
    setImagen({ ...imagen, prepagaFrente: event.target.files[0] })
  }
  const handleInput5 = (event) => {
    setImagen({ ...imagen, prepagaDorso: event.target.files[0] })
  }


  const handleClick = (event) => {
    console.log(event);
    const formData = new FormData ();
    formData.append ('fechaIngreso', formState.fechaIngreso)
    formData.append ('perfil', imagen.perfil)
    formData.append ('nombre', formState.nombre)
    formData.append ('apellido', formState.apellido)
    formData.append ('documento', formState.documento)
    formData.append ('fechaNacimiento', formState.fechaNacimiento)
    formData.append ('nacionalidad', formState.nacionalidad)
    formData.append ('prepaga', formState.prepaga)
    formData.append ('numeroAfiliado', formState.numeroAfiliado)
    formData.append ('estadoCivil', formState.estadoCivil)
    formData.append ('servicioEmergencia', formState.servicioEmergencia)
    formData.append ('telefonoEmergencia', formState.telefonoEmergencia)
    formData.append ('autorizadoSalir', formState.autorizadoSalir)
    formData.append ('nombrePariente', formState.nombrePariente)
    formData.append ('documentoPariente', formState.documentoPariente)
    formData.append ('parentezco', formState.parentezco)
    formData.append ('domiiclio', formState.domiiclio)
    formData.append ('telefono1', formState.telefono1)
    formData.append ('telefono2', formState.telefono2)
    formData.append ('telefono3', formState.telefono3)
    formData.append ('email', formState.email)
    formData.append ('documentoFrente', imagen.documentoFrente)
    formData.append ('documentoDorso', imagen.documentoDorso)
    formData.append ('prepagaFrente', imagen.prepagaFrente)
    formData.append ('prepagaDorso', imagen.prepagaDorso)
    formData.append ('comentario', formState.comentario)
    formData.append ('estado', formState.estado)

    axios.post('http://localhost:3000/abuelo', formData)
          .then((res) => {
            Swal.fire(
              'Buen trabajo!',
              'Abuelo creado con éxito!',
              'success'
            )
              console.log("res")
              setTimeout(() => {
                window.location.href = "/activos"
            }, 2000);
          })
  }
return (
  <div className='contenedor2'>
  <Navbar/>
  <h2>Ingrese un nuevo abuelo</h2>

  <form className='form' onSubmit={(ev) => ev.preventDefault()}>

  <label htmlFor="date">Fecha de ingreso:</label>
  <input type="date" id="date" name="fechaIngreso" onChange={handleInput} value={formState.fechaIngreso}/>

  <label htmlFor="imagen">foto de perfil:</label>
  <input type="file" id="imagen" name="perfil" multiple onChange={handleInput1}/>

  <label htmlFor="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" onChange={handleInput} value={formState.nombre}/>

  <label htmlFor="apellido">Apellido:</label>
  <input type="text" id="nombre" name="apellido" onChange={handleInput} value={formState.apellido}/>

  <label htmlFor="doc">Numero de docuento:</label>
  <input type="text" id="doc" name="documento" onChange={handleInput} value={formState.documento}/>

  <label htmlFor="date">Fecha de nacimiento:</label>
  <input type="date" id="date" name="fechaNacimiento" onChange={handleInput} value={formState.fechaNacimiento}/>
  
  <label htmlFor="nombre">Nacionalidad:</label>
  <input type="text" id="nombre" name="nacionalidad" onChange={handleInput} value={formState.nacionalidad}/>

  <label htmlFor="nombre">Obra social:</label>
  <input type="text" id="nombre" name="prepaga" onChange={handleInput} value={formState.prepaga}/>

  <label htmlFor="nombre">Numero de afiliado:</label>
  <input type="text" id="nombre" name="numeroAfiliado" onChange={handleInput} value={formState.numeroAfiiado}/>
  
  <label htmlFor="nombre">Estado civil:</label>
  <input type="text" id="nombre" name="estadoCivil" onChange={handleInput} value={formState.estadoCivil}/>

  <label htmlFor="nombre">Servicio de emergencia:</label>
  <input type="text" id="nombre" name="servicioEmergencia" onChange={handleInput} value={formState.servicioEmergencia}/>

  <label htmlFor="number">Telefono de emergencia:</label>
  <input type="number" id="number" name="telefonoEmergencia" onChange={handleInput} value={formState.telefonoEmergencia}/>

  <label htmlFor="nombre">¿Autorizado a salir?:</label>
  <input type="text" id="nombre" name="autorizadoSalir" onChange={handleInput} value={formState.autorizadoSalir}/>

  <label htmlFor="nombre">Nombre y apellido del familiar responsable:</label>
  <input type="text" id="nombre" name="nombreParientes" onChange={handleInput} value={formState.nombreParientes}/>
  
  <label htmlFor="number">Documento del familiar:</label>
  <input type="number" id="number" name="documentoPariente" onChange={handleInput} value={formState.documentoPariente}/>

  <label htmlFor="nombre">Parentezco:</label>
  <input type="text" id="nombre" name="parentezco" onChange={handleInput} value={formState.parentezco}/>

  <label htmlFor="nombre">Domicilio:</label>
  <input type="text" id="nombre" name="domicilio" onChange={handleInput} value={formState.domicilioPariente}/>

  <label htmlFor="number">Telefono 1:</label>
  <input type="number" id="number" name="telefono1" onChange={handleInput} value={formState.telefono1}/>

  <label htmlFor="number">Telefono 2:</label>
  <input type="number" id="number" name="telefono2" onChange={handleInput} value={formState.telefono2}/>

  <label htmlFor="number">Telefono 3:</label>
  <input type="number" id="number" name="telefono3" onChange={handleInput} value={formState.telefono3}/>
  
  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" onChange={handleInput} value={formState.email}/>

  <label htmlFor="imagen">Foto del frente del documento:</label>
  <input type="file" id="imagen" name="imagen" onChange={handleInput2}/>

  <label htmlFor="imagen">Foto del dorso del documento:</label>
  <input type="file" id="imagen" name="imagen" onChange={handleInput3}/>

  <label htmlFor="imagen">Foto del frente del carnet obra social:</label>
  <input type="file" id="imagen" name="imagen" onChange={handleInput4}/>

  <label htmlFor="imagen">Foto del dorso del carnet obra social:</label>
  <input type="file" id="imagen" name="imagen" onChange={handleInput5}/>

  <label htmlFor="comentario">Comentario:</label>
  <textarea id="comentario" name="comentario" onChange={handleInput} value={formState.comentario}></textarea>

  <label htmlFor="estado">Estado:</label>
  <input type="text" id="estado" name="estado" placeholder='activo o inactivo' onChange={handleInput} value={formState.estado}/>
  
  <input className='boton' type="submit" value="Enviar" name='submit' id='boton' onClick={handleClick}/>
  </form>
      
  </div>
)
}

export default Ingresos