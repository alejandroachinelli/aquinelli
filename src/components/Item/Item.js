import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext/CartContext';

const Item = ({item}) => {
    const {addToCart} = useCartContext();
    const onAdd = qty => addToCart(item, qty);

    return (
        <>
            <Card key={item.id}>
                <Link to={`/detail/${item.id}`}>
                    <Image
                        src={item.pictureUrl}
                        wrapped
                        ui={false} />
                    <Card.Content>
                        <Card.Header>{item.name}</Card.Header>
                        <Card.Description>
                            ${item.unitPrice}
                        </Card.Description>
                    </Card.Content>
                </Link>
                <ItemCount stock = {item.stock} onAdd = {onAdd}>
                </ItemCount>
            </Card>
        </>
    )
}

export default Item;