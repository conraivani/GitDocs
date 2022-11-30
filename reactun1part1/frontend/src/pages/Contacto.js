import React from "react";
import '../styles/components/pages/contacto.css';
import { useState } from 'react';
import axios from 'axios';

const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto'
            , formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="contactos">

            <div className="formulario">
                <h1>Contacto Rápido</h1>
                <form action="/contacto" method="post" onSubmit={handleSubmit} >
                    <p>
                        <label for="Nombre">Nombre:</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="E-mail">E-mail:</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="Teléfono">Teléfono:</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                    </p>
                    <p>
                        <label for="Mensaje">Mensaje:</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="acciones">
                        <input type="submit" value="Enviar" />
                    </p>

                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                </form>
            </div>



            <div className="redes">
                <h1>También puedes contactarme a través de mis redes sociales aquí abajo:</h1>
            </div>
        </main>


    )
}

export default Contacto;

