import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, withRouter } from 'react-router-dom';
import './index.css';
import { IconContext } from 'react-icons';
import LogoMedio from '../../assets/logos/logo-container-operativa.svg'


function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const isAuth = () => {
    if(localStorage.getItem('token') !== null) {
        return true
    }
        return false
};

    const cerrarSesion= () =>{
         localStorage.removeItem('token')
         localStorage.removeItem('email')
         props.history.push('/')    
     }
  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <div className='navbar2 fixed-top'>
        <div className="">
                <img src= {LogoMedio} className="icon-img-logo"  alt=""/>                
        </div>
            <div>
                <Link to='#' className='menu-bars '>
                    <FaIcons.FaBars onClick={showSidebar} 
                    style={{
                        color:"black"
                    }}/>
                </Link>
            </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu '}>
          <ul  className='nav-menu-items ul-sidebar' onClick={showSidebar}>
              {
                 isAuth() ? (
                   
                    <li className ="nav-text">
                    <Link onClick= {() => cerrarSesion()}><FaIcons.FaUserCircle/>
                    <span>Cerrar Sesion</span>  
                    </Link>
                </li>
                  ): (  
                    <li className ="nav-text">
                    <Link to="/inicio-sesion"><FaIcons.FaUserCircle/>
                    <span>Iniciar Sesion</span>  
                    </Link>
                    </li>
                   
                  )
              }
                
              
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default withRouter (Navbar);


