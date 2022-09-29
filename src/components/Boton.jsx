// components/Input.jsx
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
const Boton = () => {
    return (
        <div style={{
            display: 'block',
            width: 700,
            padding: 30
        }}>

            <Form>
                <Button variant="primary" type="submit">
                    Boton
            </Button>
            </Form>


        </div>

    );
};
export default Boton;
