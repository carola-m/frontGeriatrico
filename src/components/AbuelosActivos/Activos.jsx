import Navbar from '../Nav/Navbar'
import './Activos.css'
import { Link } from 'react-router-dom';
import user from '../../imagenes/abueloUser.jpg'

function Activos({abuelos}) {

  const abueloActivo = abuelos.filter(abuActivo => abuActivo.estado === "activo");
  
  return (
    <>
    <Navbar/>
    <div className='container'>
    {abueloActivo.map((abuelo, i)=>{
      return (<div className='card' key={i}>
      <div>
      {abuelo.perfil && abuelo.perfil.includes("cloudinary") ? (
      <img src={abuelo.perfil} width={200} alt='foto' />) : null}
      {!abuelo.perfil || !abuelo.perfil.includes("cloudinary") ? (<img src={user}  width={80} alt='fotoPerfil'/>) : null}
      <p>{abuelo.nombre}</p>
      <p>{abuelo.apellido}</p>
      <p>{abuelo.documento}</p>
      <p> <Link to={`/activos/${abuelo._id}`}><button>Ver más</button></Link></p>
      </div>
      </div>)

    })}
    </div>
    </>
  )
}

export default Activos