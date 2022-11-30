import React from "react";
import '../styles/components/pages/miperfil.css'
const Miperfil = (props) => {
    return (
    
<main className="holder">
<div id="imgperfil">
            <img src="images/miperfil/miperfil.jpg" width="100%" alt="imghome"/>
        </div>
<div className="miperfil">
            <h1>Competencias y conocimientos</h1>
        </div>
        <div className="miperfilcol">
            <div className="columnap">
                <h1>Desarrollador web full stack</h1>
                <h2>Descripción</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Git</li>
                    <li>mySQL</li>
                    <li>API Rest</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                </ul>
            </div>

            <div className="columnap">
                <h1>Marketing Digital</h1>
                <h2>Descripción</h2>
                <ul>
                    <li>Gestión de sitios web corporativos</li>
                    <li>Creación de contenido web</li>
                    <li>Gestión de publicidad</li>
                    <li>Marketing de redes sociales</li>
                    <li>Gestión de eventos</li>
                </ul>
            </div>
            <div class="columnap">
                <h1>Dirección y desarrollo de equipos de trabajo</h1>
                <h2>Descripción</h2>
                <ul>
                    <li>Aptitudes para el trabajo en equipo</li>
                    <li>Aptitudes para la supervisión</li>
                    <li>Servicio de atención al cliente</li>
                    <li>Gestión operativa</li>
                    <li>Habilidades interpersonales y de comunicación</li>
                    <li>Aptitudes para los procedimientos de oficina</li>
                </ul>
            </div>
            </div>

            <div className="servicios">
            <h1>Servicios</h1>

            <div className="servicio">
                <img src="images/servicios/img1serv.jpg" width="100" alt="librosprogramacion"/>
                <div className="calidad">
                    <h4>Priorizar la calidad</h4>
                    <ul>
                        <li>Escritura de código eficiente, probable y bien diseñado mediante buenas prácticas de
                            desarrollo de software.</li>
                        <li>Sitios web adaptables a los diferentes tipos de pantallas.</li>
                    </ul>
                </div>
            </div>
            <div className="servicio">
                <img src="images/servicios/img2serv.jpg" width="100" alt="personalizacion"/>
                <div className="personalizacion">
                    <h4>Sitios totalmente personalizados</h4>
                    <ul>
                        <li>Creación y diseños de sitios web que se adapten a la necesidad de cada cliente.</li>
                        <li>Seguridad, protección y backups dependiendo del tipo de sitio web y su entorno.</li>
                    </ul>
                </div>
            </div>
            <div className="servicio">
                <img src="images/servicios/img3serv.jpg" width="100" alt="serviciosextra"/>
                <div className="masservicios">
                    <h4>Servicios para sitios ya publicados</h4>
                    <ul>
                        <li>Monitoreo y análisis del sitio web en funcionamiento.</li>
                        <li>Servicios de mantenimiento y actualización del sitio web.</li>
                        <li>Solución de posibles problemas o errores.</li>
                    </ul>
                </div>
            </div>

            <div id="micv">
            <h1>Mi CV</h1>
            <img src="./images/miperfil/micv.jpg" width="100%" alt="micv"/>

            </div> </div>

</main>
)}

export default Miperfil;