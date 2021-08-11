import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Header, Image, Button, Icon, Statistic, Table } from "semantic-ui-react";
import {useCartContext} from '../../context/CartContext'

function Cart(){
    const {cart, clearCart, removeItem} = useCartContext();

    if(!cart.length) return <Redirect to="/store"/>;

    return(
        <>
            <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Producto</Table.HeaderCell>
                        <Table.HeaderCell>Cantidad</Table.HeaderCell>
                        <Table.HeaderCell>Precio x Unidad</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {cart.map((item) => (
                        <Table.Row>
                        <Table.Cell>
                        <Header as='h4' image>
                            <Image src={item.pictureUrl} rounded size='medium' />
                            <Header.Content>
                            {item.name}
                            </Header.Content>
                        </Header>
                        </Table.Cell>
                        <Table.Cell>{item.quantity}</Table.Cell>
                        <Table.Cell>${item.unitPrice}</Table.Cell>
                        <Table.Cell>
                            <Button onClick={() => removeItem(item.id)}>
                                <Icon name='trash alternate'></Icon>
                            </Button>
                        </Table.Cell>
                    </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <Statistic.Group size='mini' floated='right'>
                <Statistic>
                    <Statistic.Label>Total</Statistic.Label>
                    <Statistic.Value>${cart.reduce((acc, {quantity, unitPrice}) => acc + quantity * unitPrice, 0).toFixed(2)}</Statistic.Value>
                </Statistic>
                <Link to={`/Checkout`}>
                    <Button color='green'>
                        <Icon name='checkmark'/>
                        Procesar Compra
                    </Button>
                </Link>
                <Link to={`/store`}>
                    <Button>
                        <Icon name='angle left' />
                        Volver a la tienda
                    </Button>
                </Link>
                <Button onClick={clearCart}>Vaciar carrito</Button>
            </Statistic.Group>
        </>
    )
}

export default Cart;