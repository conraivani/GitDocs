import React from 'react';
import '../../styles/components/layout/Footer.css';

const Footer = (props) => {
    return (
        <footer>
            <div class="redes">
            <a href="https://www.facebook.com/conra.ivani" rel="noreferrer" target="_blank"><img
                    src="./images/redes/facebook.png" alt="facebook"/></a>
            <a href="https://www.instagram.com/conraivani/" target="_blank" rel="noreferrer"><img
                    src="./images/redes/instagram.png" alt="instagram"/></a>
            <a href="https://www.linkedin.com/in/conrado-ivani-887558241/" target="_blank" rel="noreferrer"><img
                    src="./images/redes/linkedin.png" alt="twitter"/></a>
        </div>

        <div id="flotante">
            <a href="https://wa.me/1234" target="_blank" rel="noreferrer"><img src="./images/redes/whatsapp.png" alt="whatsapp"/></a>
        </div>
        <div class="derechos">
            <h2>Sitio creado por Conrado Ivani</h2>
        </div>
        </footer>)
};

export default Footer; 