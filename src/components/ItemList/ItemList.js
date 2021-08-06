import React from 'react'
import { Card } from 'semantic-ui-react'
import Item from '../Item/Item';

function ItemList(props) {

    return (
        <Card.Group>
            {props.items.map((item, idx) => {
            return (
                <Item key={idx} item={item}></Item>
            );
        })}
        </Card.Group>
    )
}

export default ItemList;