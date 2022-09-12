import React from "react";
const Homepage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/home/home.jpg" alt="home" />
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet. In explicabo adipisci est voluptas iste aut beatae provident cum impedit natus ea vitae iure sed
                        ullam quibusdam et voluptas Quis. Eum enim dolorem nam blanditiis ipsa et obcaecati incidunt eum facilis aspernatur!
                        Sit numquam eius id itaque quia ut amet culpa ut rerum nisi et veritatis aspernatur ut voluptate beatae id ipsam sunt.</p>
                    <p>Lorem ipsum dolor sit amet. In explicabo adipisci est voluptas iste aut beatae provident cum impedit natus ea vitae iure sed
                        ullam quibusdam et voluptas Quis. Eum enim dolorem nam blanditiis ipsa et obcaecati incidunt eum facilis aspernatur!
                        Sit numquam eius id itaque quia ut amet culpa ut rerum nisi et veritatis aspernatur ut voluptate beatae id ipsam sunt.</p>
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
