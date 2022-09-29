// components/Input.jsx
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
const Input = () => {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');

    return (

        <div style={{
            display: 'block',
            width: 700,
            padding: 30
        }}>
            <h4>Desafío: estado de los componentes y Eventos</h4>
            <Form>

                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control name="nombre" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} type="text"
                        placeholder="Ingresa tu nombre completo" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Ingresa tu contraseña" />
                </Form.Group>

                <br></br>

            </Form>
            <hr />
            <h4>Datos ingresados</h4>
            {nombre} - {password}
        </div>

    );
};
export default Input;
