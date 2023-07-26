import React from 'react'
import Navbar from '../Nav/Navbar'
import { Link } from 'react-router-dom';

function Pasivos({abuelos}) {
 
  const abueloInactivo = abuelos.filter(abuInactivo => abuInactivo.estado === "inactivo");
  
  return (
    <>
    <Navbar/>
    <div className='container'>
    {abueloInactivo.map((abuelo, i)=>{
      return (<div className='card' key={i}>
      <div>
      <img src={abuelo?.perfil} width={80} alt='foto'></img>
      <p>{abuelo.nombre}</p>
      <p>{abuelo.apellido}</p>
      <p>{abuelo.documento}</p>
      <p> <Link to={`/pasivos/${abuelo.nombre}`}><button>Ver más</button></Link></p>
      </div>
      </div>)

    })}
    </div>
    </>
  )
}

export default Pasivos