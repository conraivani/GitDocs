import React from "react";
import '../styles/components/pages/homepage.css'
const Homepage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="./images/home/home.jpg" alt="home" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos a mi sitio web</h2>
                    <p> Hola, mundo!
                        Mi nombre es Conrado Ivani y hace un tiempo me aventuré en el área del desarrollo web. Cada día descubro algo nuevo en este mundo, lo que lo hace sumamente interesante y casi infinito.
                        Los invito a conocer mi perfíl con el fin de algún día poder serles de utilidad. Gracias por su atención!</p>
                </div>
                <div className="objetivos">
                    <h2>Objetivos</h2>
                    <ul><li>Formar parte de proyectos serios basados en la creatividad e innovación.</li>
                        <li>Creación y diseño de sitios web que se adapten a la necesidad de cada cliente.</li>
                        <li>Atraer mas clientes y aprovechar al máximo los motores de búsqueda a través de los sitios web creados.</li>
                        <li>Seguir capacitándome para alcanzar el máximo provecho de cada lenguaje y herramienta disponible.</li></ul>

                </div>

            </div>

        </main>
    )
}

export default Homepage;
