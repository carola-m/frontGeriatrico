import Navbar from '../Nav/Navbar'
import './Activos.css'
import { Link } from 'react-router-dom';

function Activos({abuelos}) {

  const abueloActivo = abuelos.filter(abuActivo => abuActivo.estado === "activo");
  
  return (
    <>
    <Navbar/>
    <div className='container'>
    {abueloActivo.map((abuelo, i)=>{
      return (<div className='card' key={i}>
      <div>
      <img src={abuelo?.perfil} width={80} alt='foto'></img>
      <p>{abuelo.nombre}</p>
      <p>{abuelo.apellido}</p>
      <p>{abuelo.documento}</p>
      <p> <Link to={`/activos/${abuelo.nombre}`}><button>Ver más</button></Link></p>
      </div>
      </div>)

    })}
    </div>
    </>
  )
}

export default Activos