import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import { itemsData } from '../../itemData';
import Item from '../Item/Item';

function ItemList() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            setItems(itemsData);
            console.log(items);
        },2000)
    });

    return (
        <Card.Group>
            {items.map((item, idx) => {
            return (
                <Item name={item.name} unitPrice={item.unitPrice} stock={item.stock}></Item>
            );
        })}
        </Card.Group>
    )
}

export default ItemList;