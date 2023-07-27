
import { Link, useParams} from 'react-router-dom'
import './Detail.css'
import Navbar from '../Nav/Navbar'
import axios from 'axios'
import Swal from 'sweetalert2';

const Detail=({abuelos}) =>{
    const {nombre} = useParams()
    const findActivos = abuelos.find((item) =>{
        return item.nombre === nombre
    })

    const handleDeleteClick = () => {
      Swal.fire({
        title: '¿Estás seguro de eliminar?',
        text: "Estás a punto de perder a este abuelo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:3000/abuelo/${findActivos._id}`)
        .then((response) => {
          console.log('Elemento eliminado con éxito:', response.data);
        })
        .catch((error) => {
          console.error('Error al eliminar el elemento:', error);
        });
    
          Swal.fire(
            'Eliminado!',
            'Tu abuelo fue eliminado.',
            'success'
            )
            setTimeout(() => {
              window.location.href = "/"
          }, 2000);

        }
      })
      
    };
    

  return (
    <div className='div-card'>
    <Navbar/>
    <div className='card-detail'>
        <img src={findActivos.perfil} width={100} alt='foto' />
        <h3>{findActivos.nombre} {findActivos.apellido}</h3>
        <p>Numero de documento: {findActivos.documento}</p>
        <p>Fecha de nacimiento: {findActivos.fechaNacimiento}</p>
        <p>Nacionalidad: {findActivos.nacionalidad}</p>
        <p>Obra social: {findActivos.prepaga}</p>
        <p>Número de afiliado: {findActivos.numeroAfiliado}</p>
        <p>Estado civil: {findActivos.estadoCivil}</p>
        <p>Servicio de emergencia: {findActivos.servicioEmergencia}</p>
        <p>Teléfono de emergencia: {findActivos.telefonoEmergencia}</p>
        <p>¿Autorizado a salir?: {findActivos.autorizadoSalir}</p>
        <p>Familiar a cargo: {findActivos.nombrePariente}</p>
        <p>Número de documento: {findActivos.documentoPariente}</p>
        <p>Parentezco: {findActivos.parentezco}</p>
        <p>Domicilio: {findActivos.domicilio}</p>
        <p>Teléfono1: {findActivos.telefono1}</p>
        <p>Teléfono2: {findActivos.telefono2}</p>
        <p>Teléfono3: {findActivos.telefono3}</p>
        <p>Email: {findActivos.email}</p>
        <p>Foto del frente del documento: <img src={findActivos.documentoFrente} width={300} height={200} alt='foto' /></p>  
        <p>Foto del dorso del documento: <img src={findActivos.documentoDorso} width={300} height={200} alt='foto' /></p> 
        <p>Foto del frente del carnet obra social: <img src={findActivos.prepagaFrente} width={300} height={200}alt='foto' /></p> 
        <p>Foto del dorso del carnet obra social: <img src={findActivos.prepagaDorso} width={300} height={200} alt='foto' /></p> 
        <p>Estado: {findActivos.estado}</p>
        <p>Comentarios: {findActivos.comentario}</p>
    </div>
    <button onClick={handleDeleteClick}>Eliminar</button>
     <Link to={`/editAbuelo/${findActivos._id}`}> <button>Modificar</button></Link>
    </div>

  );
};

export default Detail