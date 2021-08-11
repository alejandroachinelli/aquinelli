import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const Item = ({item}) => {
    const {addToCart} = useCartContext();
    const onAdd = (quantity) => addToCart(item, quantity);

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
                <ItemCount stock={item.stock} paramOnAdd={onAdd}>
                </ItemCount>
            </Card>
        </>
    )
}

export default Item;