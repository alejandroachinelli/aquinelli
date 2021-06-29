import React from 'react'
import { Card } from 'semantic-ui-react'
import Item from '../Item/Item';

function ItemList(props) {

    return (
        <Card.Group>
            {props.items.map((item, idx) => {
            return (
                <Item name={item.name} unitPrice={item.unitPrice} stock={item.stock}></Item>
            );
        })}
        </Card.Group>
    )
}

export default ItemList;