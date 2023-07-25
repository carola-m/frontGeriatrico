import Navbar from '../Nav/Navbar'
import './Activos.css'
import { Link } from 'react-router-dom';


function Activos({abuelos}) {


  return (
    <>
    <Navbar/>
    <div className='container'>
    {abuelos.map((abuelo, i)=>{
      return (<div className='card' key={i}>
      <tr>
      <img src={abuelo?.perfil} width={80} alt='foto'></img>
      <th>{abuelo.nombre}</th>
      <th>{abuelo.apellido}</th>
      <th>{abuelo.documento}</th>
      <th> <Link to={`/activos/${abuelo.nombre}`}><button>Ver más</button></Link></th>
      </tr>
      </div>)

    })}
    </div>
    </>
  )
}

export default Activos