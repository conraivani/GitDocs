import React from 'react';

import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <Nav>
            <div>
                <ul>
                    <li><Link to="/">homepage</Link></li>
                    <li><Link to="/miperfil">miperfil</Link></li>
                    <li><Link to="/novedades">novedades</Link></li>
                    <li><Link to="/contacto">contacto</Link></li>
                </ul>
            </div>

        </Nav> 


)
};

export default Nav;