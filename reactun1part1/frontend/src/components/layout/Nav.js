import React from 'react';

import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink activeClassname="activo" exact to="/">Homepage</NavLink></li>
                    <li><NavLink activeClassname="activo" exact to="/miperfil">Miperfil</NavLink></li>
                    <li><NavLink activeClassname="activo" exact to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeClassname="activo" exact to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>

        </nav> 


)
};

export default Nav;