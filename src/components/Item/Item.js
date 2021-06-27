import React, { useState } from 'react';
import { Card, Button, Icon, Popup, Label } from 'semantic-ui-react';

function Item(props) {
    const [numero, setNumero] = useState(0);

    const handleIncrement = () => {
        if(numero < props.stock){
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
        <>
            <Card>
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Description>
                        ${props.unitPrice}
                    </Card.Description>
                    <Card.Meta>
                        Stock: {props.stock}
                    </Card.Meta>
                </Card.Content>
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
                    <Label circular color='green'>
                        <Icon name='shopping cart'/>Agregados al carrito: {numero}
                    </Label>
                </Card.Content>
            </Card>
        </>
    )
}

export default Item;