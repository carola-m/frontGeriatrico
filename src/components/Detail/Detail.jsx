
import { Link, useParams} from 'react-router-dom'
import './Detail.css'
import Navbar from '../Nav/Navbar'
import axios from 'axios'
import Swal from 'sweetalert2';
import user from '../../imagenes/abueloUser.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Detail=({abuelos}) =>{
    const {id} = useParams()
    //console.log("useParams: " , useParams())
    const findActivos = abuelos.find((item) =>{
        return item._id === id
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
          axios.delete(`${process.env.REACT_APP_BACK_URL}/abuelo/${findActivos._id}`)
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
    
    {findActivos.perfil && findActivos.perfil.includes("cloudinary") ? (
      <img src={findActivos.perfil} width={200} alt='foto' />) : null}
      {!findActivos.perfil || !findActivos.perfil.includes("cloudinary") ? (<img src={user}  width={120} alt='fotoPerfil'/>) : null}
        <p>Fecha de ingreso: {findActivos.fechaIngreso ? (findActivos.fechaIngreso) : null}</p>
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
        <p>Familiar a cargo: {findActivos.nombreParientes}</p>
        <p>Número de documento: {findActivos.documentoPariente}</p>
        <p>Parentezco: {findActivos.parentezco}</p>
        <p>Domicilio: {findActivos.domicilio}</p>
        <p>Teléfono1: {findActivos.telefono1}</p>
        <p>Teléfono2: {findActivos.telefono2}</p>
        <p>Teléfono3: {findActivos.telefono3}</p>
        <p>Email: {findActivos.email}</p>

        <p>Foto del frente del documento:  {findActivos.documentoFrente && findActivos.documentoFrente.includes("cloudinary") ? (
                    <img src={findActivos.documentoFrente} width={300} height={200} alt='foto' />
                  ) : null}
                  {!findActivos.documentoFrente || !findActivos.documentoFrente.includes("cloudinary") ? (
                     <FontAwesomeIcon icon={faTriangleExclamation} size="lg" style={{color: "#e40733"}} /> 
                  ) : null}</p>
        <p>Foto del dorso del documento:  {findActivos.documentoDorso && findActivos.documentoDorso.includes("cloudinary") ? (
                <img src={findActivos.documentoDorso} width={300} height={200} alt='foto'/>
                  ) : null}
                  {!findActivos.documentoDorso || !findActivos.documentoDorso.includes("cloudinary") ? (
                     <FontAwesomeIcon icon={faTriangleExclamation} size="lg" style={{color: "#e40733"}} /> 
                  ) : null}</p> 
        <p>Foto del frente del carnet obra social:  {findActivos.prepagaFrente && findActivos.prepagaFrente.includes("cloudinary") ? (
                <img src={findActivos.prepagaFrente} width={300} height={200} alt='foto'/>
                ) : null}
                {!findActivos.prepagaFrente || !findActivos.prepagaFrente.includes("cloudinary") ? ( 
                <FontAwesomeIcon icon={faTriangleExclamation} size="lg" style={{color: "#e40733"}} /> 
                ) : null} </p> 
        <p>Foto del dorso del carnet obra social:   {findActivos.prepagaDorso && findActivos.prepagaDorso.includes("cloudinary") ? (
                <img src={findActivos.prepagaDorso} width={300} height={200} alt='foto'/>
                  ) : null}
                  {!findActivos.prepagaDorso || !findActivos.prepagaDorso.includes("cloudinary") ? (
                    <FontAwesomeIcon icon={faTriangleExclamation} size="lg" style={{color: "#e40733"}} /> 
                  ) : null}</p> 
        <p>Estado: {findActivos.estado}</p>
        <p>Comentarios: {findActivos.comentario}</p>
    </div>
    <button onClick={handleDeleteClick}>Eliminar</button>
     <Link to={`/editAbuelo/${findActivos._id}`}> <button>Modificar</button></Link>
     <Link to={'/'}><button>Cancelar</button></Link>
    </div>

  );
};

export default Detail