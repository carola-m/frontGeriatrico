import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Ingresos/Ingresos.css'
import Navbar from '../Nav/Navbar';
import user from '../../imagenes/abueloUser.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const Edit = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [abuelo, setAbuelo] = useState({});

  const onSubmit = (newdata) => {
    console.log(newdata);
    const formData = new FormData();

    formData.append ('fechaIngreso', newdata.fechaIngreso)
    formData.append ('perfil', newdata.perfil)
    formData.append ('nombre', newdata.nombre)
    formData.append ('apellido', newdata.apellido)
    formData.append ('documento', newdata.documento)
    formData.append ('fechaNacimiento', newdata.fechaNacimiento)
    formData.append ('nacionalidad', newdata.nacionalidad)
    formData.append ('prepaga', newdata.prepaga)
    formData.append ('numeroAfiliado', newdata.numeroAfiliado)
    formData.append ('estadoCivil', newdata.estadoCivil)
    formData.append ('servicioEmergencia', newdata.servicioEmergencia)
    formData.append ('telefonoEmergencia', newdata.telefonoEmergencia)
    formData.append ('autorizadoSalir', newdata.autorizadoSalir)
    formData.append ('nombreParientes', newdata.nombreParientes)
    formData.append ('documentoPariente', newdata.documentoPariente)
    formData.append ('parentezco', newdata.parentezco)
    formData.append ('domiiclioPariente', newdata.domiiclioPariente)
    formData.append ('telefono1', newdata.telefono1)
    formData.append ('telefono2', newdata.telefono2)
    formData.append ('telefono3', newdata.telefono3)
    formData.append ('email', newdata.email)
    formData.append ('documentoFrente', newdata.documentoFrente)
    formData.append ('documentoDorso', newdata.documentoDorso)
    formData.append ('prepagaFrente', newdata.prepagaFrente)
    formData.append ('prepagaDorso', newdata.prepagaDorso)
    formData.append ('comentario', newdata.comentario)
    formData.append ('estado', newdata.estado)
    

    axios.put(`http://localhost:3000/abuelo/${id}`, formData).then((res) => {
      Swal.fire(
        'Buen trabajo!',
        'Adulto mayor modificado con éxito!',
        'success'
      )
        console.log("res")
        setTimeout(() => {
          window.location.href = "/"
      }, 2000);
    });
  
};
  useEffect(() => {
  const getAbuelosById = async () => {
    const res = await axios.get(`http://localhost:3000/abuelo/${id}`);
    setAbuelo(res.data);
    //console.log ("get",abuelo);
  };
  getAbuelosById();
},[id]);
useEffect(() => {
  reset(abuelo);
  console.log ("reset",abuelo);
}, [abuelo, reset]);


  return (
    <div>
    <Navbar/>
    <form  className='form' onSubmit={handleSubmit(onSubmit)}>
    <h3>Editar Adulto mayor</h3>

    <label htmlFor="fechaIngreso">Fecha de ingreso:</label>
          <input 
          type="date" 
          id="fechaIngreso"  
          onChange={(ev) => setAbuelo({ ...abuelo, fechaIngreso: ev.target.value })}
          {...register('fechaIngreso', { required: false })}
    />

  <label htmlFor="perfil">foto de perfil:</label>
      {abuelo.perfil && abuelo.perfil.includes("cloudinary") ? (
      <img src={abuelo.perfil} width={200} alt='foto' />) : null}
      {!abuelo.perfil || !abuelo.perfil.includes("cloudinary") ? (<img src={user}  width={80} alt='fotoPerfil'/>) : null}
        <input 
        type="file" 
        id="perfil" 
        onChange={(ev) => setAbuelo({ ...abuelo, perfil: ev.target.value })}
        {...register('perfil', { required: false })}
    />
      
      <label htmlFor='nombre'>Nombre: </label>
            <input
            type='text'
            id='nombre'
            onChange={(ev) => setAbuelo({ ...abuelo, nombre: ev.target.value })}
            {...register('nombre', { required: false })}
      />
      <label htmlFor="apellido">Apellido:</label>
              <input 
              type="text" 
              id="apellido" 
              onChange={(ev) => setAbuelo({ ...abuelo, apellido: ev.target.value })}
              {...register('apellido', { required: false })}
              />

      <label htmlFor="documento">Numero de docuento:</label>
            <input 
            type="text" 
            id="documento"  
            onChange={(ev) => setAbuelo({ ...abuelo, documento: ev.target.value })}
              {...register('documento', { required: false })}
        />

      <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
              <input 
              type="date" 
              id="fechaNacimiento"  
              onChange={(ev) => setAbuelo({ ...abuelo, fechaNacimiento: ev.target.value })}
              {...register('fechaNacimiento', { required: false })}
      />
        
      <label htmlFor="nacionalidad">Nacionalidad:</label>
            <input 
            type="text" 
            id="nacionalidad"  
            onChange={(ev) => setAbuelo({ ...abuelo, nacionalidad: ev.target.value })}
            {...register('nacionalidad', { required: false })}
      />

      <label htmlFor="prepaga">Obra social:</label>
            <input 
            type="text" 
            id="prepaga"   
            onChange={(ev) => setAbuelo({ ...abuelo, prepaga: ev.target.value })}
            {...register('prepaga', { required: false })}
      />

        <label htmlFor="numeroAfiliado">Numero de afiliado:</label>
              <input type="text" 
              id="numeroAfiliado"  
              onChange={(ev) => setAbuelo({ ...abuelo, numeroAfiliado: ev.target.value })}
              {...register('numeroAfiliado', { required: false })}
        />

        <label htmlFor="estadoCivil">Estado civil:</label>
              <input 
              type="text" 
              id="estadoCivil" 
              onChange={(ev) => setAbuelo({ ...abuelo, estadoCivil: ev.target.value })}
              {...register('estadoCivil', { required: false })}
        />

        <label htmlFor="servicioEmergencia">Servicio de emergencia:</label>
              <input 
              type="text" 
              id="servicioEmergencia"  
              onChange={(ev) => setAbuelo({ ...abuelo, servicioEmergencia: ev.target.value })}
              {...register('servicioEmergencia', { required: false })}
        />

        <label htmlFor="telefonoEmergencia">Telefono de emergencia:</label>
              <input 
              type="number" 
              id="telefonoEmergencia"  
              onChange={(ev) => setAbuelo({ ...abuelo, telefonoEmergencia: ev.target.value })}
              {...register('telefonoEmergencia', { required: false })}
        />

        <label htmlFor="autorizadoSalir">¿Autorizado a salir?:</label>
              <input 
              type="text" 
              id="autorizadoSalir"  
              onChange={(ev) => setAbuelo({ ...abuelo, autorizadoSalir: ev.target.value })}
              {...register('autorizadoSalir', { required: false })}
        />

        <label htmlFor="nombreParientes">Nombre y apellido del familiar responsable:</label>
              <input 
              type="text" 
              id="nombreParientes"  
              onChange={(ev) => setAbuelo({ ...abuelo, nombreParientes: ev.target.value })}
              {...register('nombreParientes', { required: false })}
        />

        <label htmlFor="documentoPariente">Documento del familiar:</label>
              <input 
              type="number" 
              id="documentoPariente"  
              onChange={(ev) => setAbuelo({ ...abuelo, documentoPariente: ev.target.value })}
              {...register('documentoPariente', { required: false })}
        />

        <label htmlFor="parentezco">Parentezco:</label>
              <input 
              type="text" 
              id="parentezco" 
              onChange={(ev) => setAbuelo({ ...abuelo, parentezco: ev.target.value })}
              {...register('parentezco', { required: false })}
        />

        <label htmlFor="domicilioPariente">Domicilio:</label>
              <input 
              type="text" 
              id="domicilioPariente"  
              onChange={(ev) => setAbuelo({ ...abuelo, domicilioPariente: ev.target.value })}
              {...register('domicilioPariente', { required: false })}
        />

        <label htmlFor="telefono1">Telefono 1:</label>
              <input 
              type="number" 
              id="telefono1"  
              onChange={(ev) => setAbuelo({ ...abuelo, telefono1: ev.target.value })}
              {...register('telefono1', { required: false })}
        />

        <label htmlFor="telefono2">Telefono 2:</label>
              <input 
              type="number" 
              id="telefono2"  
              onChange={(ev) => setAbuelo({ ...abuelo, telefono2: ev.target.value })}
              {...register('telefono2', { required: false })}
        />

        <label htmlFor="telefono3">Telefono 3:</label>
              <input 
              type="number" 
              id="ntelefono3"  
              onChange={(ev) => setAbuelo({ ...abuelo, telefono3: ev.target.value })}
              {...register('telefono3', { required: false })}
        />

        <label htmlFor="email">Email:</label>
              <input 
              type="email" 
              id="email"  
              onChange={(ev) => setAbuelo({ ...abuelo, email: ev.target.value })}
              {...register('email', { required: false })}
        />

        <label htmlFor="documentoFrente">Foto del frente del documento:</label>
                  {abuelo.documentoFrente && abuelo.documentoFrente.includes("cloudinary") ? (
                    <img src={abuelo.documentoFrente} width={300} height={200} alt='foto' />
                  ) : null}
                  {!abuelo.documentoFrente || !abuelo.documentoFrente.includes("cloudinary") ? (
                     <FontAwesomeIcon icon={faTriangleExclamation} size="lg" style={{color: "#e40733"}} /> 
                  ) : null}
              <input 
              type="file" 
              id="documentoFrente" 
              onChange={(ev) => setAbuelo({ ...abuelo, documentoFrente: ev.target.value })}
              {...register('documentoFrente', { required: false })}
        />

        <label htmlFor="documentoDorso">Foto del dorso del documento:</label>
              {abuelo.documentoDorso && abuelo.documentoDorso.includes("cloudinary") ? (
              <img src={abuelo.documentoDorso} width={300} height={200} alt='foto' />
              ) : null}
              {!abuelo.documentoDorso || !abuelo.documentoDorso.includes("cloudinary") ? (
              <FontAwesomeIcon icon={faTriangleExclamation} size="lg" style={{color: "#e40733"}} /> 
              ) : null}
              <input 
              type="file" 
              id="documentoDorso" 
              name="documentoDorso" onChange={(ev) => setAbuelo({ ...abuelo, documentoDorso: ev.target.value })}
              {...register('documentoDorso', { required: false })}
        />

        <label htmlFor="prepagaFrente">Foto del frente del carnet obra social:</label>
            {abuelo.documentoFrente && abuelo.documentoFrente.includes("cloudinary") ? (
              <img src={abuelo.prepagaFrente} width={300} height={200} alt='foto' />
               ) : null}
              {!abuelo.prepagaFrente || !abuelo.prepagaFrente.includes("cloudinary") ? (
              <FontAwesomeIcon icon={faTriangleExclamation} size="lg" style={{color: "#e40733"}} /> 
              ) : null}
              <input 
              type="file" 
              id="prepagaFrente" 
              name="prepagaFrente" onChange={(ev) => setAbuelo({ ...abuelo, prepagaFrente: ev.target.value })}
              {...register('prepagaFrente', { required: false })}
        />

        <label htmlFor="prepagaDorso">Foto del dorso del carnet obra social:</label>
              {abuelo.prepagaDorso && abuelo.prepagaDorso.includes("cloudinary") ? (
              <img src={abuelo.prepagaDorso} width={300} height={200} alt='foto' />
              ) : null}
              {!abuelo.prepagaDorso || !abuelo.prepagaDorso.includes("cloudinary") ? (
              <FontAwesomeIcon icon={faTriangleExclamation} size="lg" style={{color: "#e40733"}} /> 
              ) : null}
              <input 
              type="file" 
              id="prepagaDorso" 
              name="prepagaDorso" onChange={(ev) => setAbuelo({ ...abuelo,prepagaDorso: ev.target.value })}
              {...register('prepagaDorso', { required: false })}
        />

        <label htmlFor="comentario">Comentario:</label>
              <textarea 
              id="comentario" 
              name="comentario"  
              onChange={(ev) => setAbuelo({ ...abuelo, comentario: ev.target.value })}
              {...register('comentario', { required: false })}
        ></textarea>

        <label htmlFor="estado">Estado:</label>
              <input 
              type="text" 
              id="estado" 
              name="estado" 
              placeholder='activo o inactivo'  
              onChange={(ev) => setAbuelo({ ...abuelo, estado: ev.target.value })}
              {...register('estado', { required: false })}
        />

      <button type='submit'>Editar</button>
      <Link to={`/activos/${id}`}><button>Cancelar</button></Link>

      </form>
    </div>
  )
}

export default Edit

