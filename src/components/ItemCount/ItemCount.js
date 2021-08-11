import React, { useState } from 'react';
import { Card, Button, Icon, Popup } from 'semantic-ui-react';

function ItemCount({stock, paramOnAdd}){
    const [numero, setNumero] = useState(0);
    let _stock = stock;

    const handleIncrement = () => {
        if(numero < _stock){
            setNumero(numero + 1);
            _stock = _stock-1;
        }else{

        }
    }

    const handleDecrement = () => {
        if(numero > 0){
            setNumero(numero - 1);
            _stock = _stock+1;
        }else{

        }
    };

    const returnStock = () => {
        setNumero(0);
    }

    return (
        <Card.Content extra>
            <div className='ui two buttons'>
            <Button.Group widths="10">
                <Popup content='Agregar producto' trigger={
                    <Button compact onClick={handleIncrement}>
                        <Icon name="plus"></Icon>
                    </Button>
                }
                />
                <Button.Or text={numero} />
                <Popup content='Quitar producto' trigger={
                    <Button compact onClick={handleDecrement}>
                        <Icon name="minus"></Icon>
                    </Button>
                }
                />
            </Button.Group>
            </div>
            <br></br>
            <br></br>
            <Button compact color='green' onClick={() => {
                paramOnAdd(numero);
                returnStock();
                }}>
                Agregar al carrito
                <Icon name="shopping cart"></Icon>
            </Button>

        </Card.Content>
    )
}

export default ItemCount;