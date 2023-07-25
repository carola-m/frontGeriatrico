import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div>
        <nav className='nav'>
        <div>
            <ul>
                <li><Link className='li' to="/">Inicio</Link></li>
                <li><Link className='li' to="/ingresos">Ingresar abuelo</Link></li>
                <li><Link className='li' to="/activos">Abuelos activos</Link></li>
                <li><Link className='li' to="/pasivos">Abuelos inactivos</Link></li>
                </ul>
                </div>
                <div className='div-nav'>
                <ul>
                <li> <Link className='li' to="/cerraSesion">Cerrar sesion</Link></li>
                </ul>
                </div>
        </nav>
    </div>
  )
}

export default Navbar