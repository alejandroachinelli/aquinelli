import React, {useContext} from "react";
import { CartContext } from "../CartContext/CartContext";
import { Redirect } from "react-router-dom";
import { List, Button } from "semantic-ui-react";

function Cart(){
    const {cart, clearCart} = useContext(CartContext);
    if(!cart.length) return <Redirect to="/store"/>;

    return(
        <>
            {cart.map((item) => (
                <List>
                    <List.Item key={item.id}>
                        <List.Content>
                            <List.Header>{item.name}</List.Header>
                            <List.Description>
                                Cantidad: {item.quantity}
                            </List.Description>
                        </List.Content>
                    </List.Item>
                </List>
            ))}
            <Button onClick={clearCart}>Vaciar carrito</Button>
        </>
    )
}

export default Cart;