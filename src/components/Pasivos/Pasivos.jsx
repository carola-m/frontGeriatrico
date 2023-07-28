import React from 'react'
import Navbar from '../Nav/Navbar'
import { Link } from 'react-router-dom';
import user from '../../imagenes/abueloUser.jpg'

function Pasivos({abuelos}) {
 
  const abueloInactivo = abuelos.filter(abuInactivo => abuInactivo.estado === "inactivo");
  
  return (
    <>
    <Navbar/>
    <div className='container'>
    {abueloInactivo.map((abuelo, i)=>{
      return (<div className='card' key={i}>
      <div>
      {abuelo.perfil && abuelo.perfil.includes("cloudinary") ? (
      <img src={abuelo.perfil} width={200} alt='foto' />) : null}
      {!abuelo.perfil || !abuelo.perfil.includes("cloudinary") ? (<img src={user}  width={80} alt='fotoPerfil'/>) : null}
      <p>{abuelo.nombre}</p>
      <p>{abuelo.apellido}</p>
      <p>{abuelo.documento}</p>
      <p> <Link to={`/pasivos/${abuelo._id}`}><button>Ver más</button></Link></p>
      </div>
      </div>)

    })}
    </div>
    </>
  )
}

export default Pasivos