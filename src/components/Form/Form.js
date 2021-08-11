import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Button, Form, Message, Icon } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const Formulario = (props) => {
    const {cart, clearCart} = useCartContext();

    const initialState = {
        NYA: "",
        EMAIL: "",
        DIRECCION: "",
    };

    const [values, setValues] = useState(initialState);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        e.preventDefault();
        if (values.NYA !== "" && values.EMAIL !== "" && values.DIRECCION !== "") {
            props.addProduct(values);
            setValues({ ...initialState });
            clearCart();
        }
    };

    if(cart.length){
        return (
            <Form onSubmit={handleSubmit}>
                <Form.Field required>
                    <label>Nombre y Apellido</label>
                    <input
                        placeholder='Ingrese su nombre y apellido completo'
                        onChange={handleOnChange}
                        value={values.NYA}
                        name='NYA'
                    />
                </Form.Field>
                <Form.Field required>
                    <label>Email</label>
                    <input
                        placeholder='Ingrese su correo'
                        onChange={handleOnChange}
                        value={values.EMAIL}
                        name='EMAIL'
                    />
                </Form.Field>
                <Form.Field required>
                    <label>Direccion</label>
                    <input
                        placeholder='Ingrese su direccion'
                        onChange={handleOnChange}
                        value={values.DIRECCION}
                        name='DIRECCION'
                    />
                </Form.Field>
                <Button type='submit'>Terminar Compra</Button>
            </Form>
        );
    }
    else
    {
        return (
            <div>
                <Message positive>
                    <Message.Header>Su compra se realizo con exito!</Message.Header>
                    <p>
                        Muy pronto nos estaremos comunicando con usted por medio de su <b>email</b> para arreglar el metodo de envio.
                    </p>
                    <p>
                        Muchas gracias!
                    </p>
                    <p>
                        Su Orden de compra es: <b>{props.codigo}</b>
                    </p>
                </Message>
                <Link to={`/store`}>
                    <Button>
                        <Icon name='angle left' />
                        Volver a la tienda
                    </Button>
                </Link>
            </div>
        );
    }
    
};

export default Formulario;