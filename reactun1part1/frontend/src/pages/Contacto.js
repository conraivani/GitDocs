import React from "react";
const Contacto = (props) => {
    return (
        <main className="holder contacto">
            <div className="contactos">
                <div className="contacto">
                    <h1>Contacto Rápido</h1>
                    <form action="" method="" class="formulario">
                        <p>
                            <label for="Nombre y Apellido">Nombre</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="E-mail">E-mail</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="Teléfono">Teléfono</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="Mensaje">Mensaje</label>
                            <textarea name=""></textarea>
                        </p>
                        <p>

                            <input type="submit" value="Enviar" />
                        </p>


                    </form>
                </div>

                <div className="datos">
                    <h1>Otras vías de Contacto</h1>
                    <div className="listacont">
                        <p><a href="tel:12345" target="_self">
                            <div className="logos" id="logo-telefono"><img src="https://imgur.com/tuu6DA3.jpg" width="50"
                                alt="logo-linkedin" /></div>
                        </a></p>
                        <p><a href="mailto: conra_ivani@hotmail.com" rel="noreferrer" target="_blank" /></p>
                        <div className="logos" id="logo-correo"><img src="https://imgur.com/9uCknvY.jpg" width="50"
                            alt="logo-linkedin" /></div>
                    </div></div></div>
        </main>


    )
}

export default Contacto;