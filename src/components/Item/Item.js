import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

function Item({data}) {

    return (
        <>
            <Card key={data.id}>
            <Image src={data.pictureUrl} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{data.name}</Card.Header>
                    <Card.Description>
                        ${data.unitPrice}
                    </Card.Description>
                </Card.Content>
                <ItemCount stock = {data.stock} productId = {data.id}>
                </ItemCount>
            </Card>
        </>
    )
}

export default Item;