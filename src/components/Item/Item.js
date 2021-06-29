import React from 'react';
import { Card } from 'semantic-ui-react';
import ItemCount from '../ItemCount/ItemCount';

function Item(props) {

    return (
        <>
            <Card>
                <Card.Content>
                    <Card.Header>{props.name}</Card.Header>
                    <Card.Description>
                        ${props.unitPrice}
                    </Card.Description>
                </Card.Content>
                <ItemCount stock = {props.stock}>
                </ItemCount>
            </Card>
        </>
    )
}

export default Item;