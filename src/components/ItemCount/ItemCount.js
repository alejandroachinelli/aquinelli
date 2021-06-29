import React, { useState } from 'react';
import { Card, Button, Icon, Popup, Label } from 'semantic-ui-react';

function ItemCount(props){
    const [numero, setNumero] = useState(0);
    let stock = props.stock;

    const handleIncrement = () => {
        if(numero < stock){
            setNumero(numero + 1);
        }else{

        }
    }

    const handleDecrement = () => {
        if(numero > 0){
            setNumero(numero - 1);
        }else{

        }
    };

    return (
        <Card.Content extra>
            <div className='ui two buttons'>
            <Popup content='Agregar al carrito' trigger={
                <Button compact onClick={handleIncrement}>
                    <Icon name="plus"></Icon>
                </Button>
            }
            />
            <Popup content='Eliminar del carrito' trigger={
                <Button compact onClick={handleDecrement}>
                    <Icon name="minus"></Icon>
                </Button>
            } />
            </div>
            <br></br>
            <br></br>
            <Button compact color='green'>
                <Icon name='shopping cart'/>Agregar al carrito: {numero}
            </Button>
        </Card.Content>
    )
}

export default ItemCount;