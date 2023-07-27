import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Nav/Navbar';

const Edit = () => {

  const [abuelo , setAbuelo] = useState ({});
  const {register, handleSubmit,handleInput1, handleInput2, handleInput3, handleInput4, handleInput5, reset} = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  

    const onSubmit = (formState, imagen) => {
    console.log(onSubmit);

    const formData = new FormData();
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

    axios.put(`http://localhost:3000/abuelo/${id}`, formData).then((res) => {});
    navigate('/');
};

useEffect(() => {
  const getAbuelosById = async () => {
    const res = await axios.get(`http://localhost:3000/abuelo/${id}`);
    setAbuelo(res.data);
    //console.log (res.data);
  };
  getAbuelosById();
},[id]);
useEffect(() => {

  reset(abuelo);
}, [abuelo, reset]);

  return (
<>
    <Navbar/>
    <div>
    <h3>Editar Adulto mayor</h3>
    <form className='form' onSubmit={handleSubmit(onSubmit)}>

<label htmlFor="date">Fecha de ingreso:</label>
<input type="date" id="date"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('fechaIngreso', { required: true })}
/>

<label htmlFor="imagen">foto de perfil:</label>
<input type="file" id="imagen" name="perfil" multiple onChange={handleInput1}
   {...register('perfil', { required: true })}
/>

<label htmlFor="nombre">Nombre:</label>
<input type="text" id="nombre"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('nombre', { required: true })}
/>

<label htmlFor="apellido">Apellido:</label>
<input type="text" id="nombre" onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('apellido', { required: true })}
/>

<label htmlFor="doc">Numero de docuento:</label>
<input type="text" id="doc"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('documento', { required: true })}
/>

<label htmlFor="date">Fecha de nacimiento:</label>
<input type="date" id="date"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('fechaNacimiento', { required: true })}
/>

<label htmlFor="nombre">Nacionalidad:</label>
<input type="text" id="nombre"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('nacionalidad', { required: true })}
/>

<label htmlFor="nombre">Obra social:</label>
<input type="text" id="nombre"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('prepaga', { required: true })}
/>

<label htmlFor="nombre">Numero de afiliado:</label>
<input type="text" id="nombre"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('numeroAfiliado', { required: true })}
/>

<label htmlFor="nombre">Estado civil:</label>
<input type="text" id="nombre"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('estadoCivil', { required: true })}
/>

<label htmlFor="nombre">Servicio de emergencia:</label>
<input type="text" id="nombre"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('servicioEmergencia', { required: true })}
/>

<label htmlFor="number">Telefono de emergencia:</label>
<input type="number" id="number"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('telefonoEmergencia', { required: true })}
/>

<label htmlFor="nombre">¿Autorizado a salir?:</label>
<input type="text" id="nombre"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('autorizadoSalir', { required: true })}
/>

<label htmlFor="nombreParientes">Nombre y apellido del familiar responsable:</label>
<input type="text" id="nombreParientes"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('nombreParientes', { required: true })}
/>

<label htmlFor="number">Documento del familiar:</label>
<input type="number" id="number"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('documentoPariente', { required: true })}
/>

<label htmlFor="nombre">Parentezco:</label>
<input type="text" id="nombre" onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('parentezco', { required: true })}
/>

<label htmlFor="nombre">Domicilio:</label>
<input type="text" id="nombre"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('domicilioPariente', { required: true })}
/>

<label htmlFor="number">Telefono 1:</label>
<input type="number" id="number"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('telefono1', { required: true })}
/>

<label htmlFor="number">Telefono 2:</label>
<input type="number" id="number"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('telefono2', { required: true })}
/>

<label htmlFor="number">Telefono 3:</label>
<input type="number" id="number"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('telefono3', { required: true })}
/>

<label htmlFor="email">Email:</label>
<input type="email" id="email"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('email', { required: true })}
/>

<label htmlFor="imagen">Foto del frente del documento:</label>
<input type="file" id="imagen" name="imagen" onChange={handleInput2}
   {...register('documentoFrente', { required: true })}
/>

<label htmlFor="imagen">Foto del dorso del documento:</label>
<input type="file" id="imagen" name="imagen" onChange={handleInput3}
   {...register('documentoDorso', { required: true })}
/>

<label htmlFor="imagen">Foto del frente del carnet obra social:</label>
<input type="file" id="imagen" name="imagen" onChange={handleInput4}
   {...register('prepagaFrente', { required: true })}
/>

<label htmlFor="imagen">Foto del dorso del carnet obra social:</label>
<input type="file" id="imagen" name="imagen" onChange={handleInput5}
  {...register('prepagaDorso', { required: true })}
/>

<label htmlFor="comentario">Comentario:</label>
<textarea id="comentario" name="comentario"  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('comentario', { required: true })}
></textarea>

<label htmlFor="estado">Estado:</label>
<input type="text" id="estado" name="estado" placeholder='activo o inactivo'  onChange={(ev) => setAbuelo({ ...abuelo, name: ev.target.value })}
  {...register('estado', { required: true })}
/>

<button type='submit'>Editar</button>
</form>
    
</div>
</>
)
};

export default Edit;