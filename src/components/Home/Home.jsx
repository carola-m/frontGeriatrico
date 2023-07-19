import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'


const Home = () =>{

    return (
        <div className='contenedor'>
        <h1>Bienvenido al portal de consultas e ingresos de abuelos del Hogar San Vicente</h1>
        <button><Link className='link' to="/ingresos">INGRESAR ABUELO</Link></button>
        <button><Link className='link' to="/activos">ABUELOS ACTIVOS</Link></button>
        <button><Link  className='link'to="/inactivos">ABUELOS INACTIVOS</Link></button>
        </div>
    )
}

export default Home