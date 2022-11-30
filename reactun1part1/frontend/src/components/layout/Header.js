import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) => { return ( 
<header>
<div className="container">
    <div><img src="images/logo.png" width="100" alt="logo"/></div>
    <div className='nombre'><h1>Conrado Ivani</h1></div>
    <div><img id="fotos" src="images/mifoto.jpg" width="100" alt="mifoto"></img></div>
</div>
</header>
)};

export default Header;