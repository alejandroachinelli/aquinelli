import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { db } from '../firebase/index';
import Formulario from "../Form/Form";
import moment from "moment";

const Checkout = (props) => {
    const {cart} = useCartContext();
    const [cod, setCod] = useState("");
    const addProduct = async (objeto) => {
        await restarCantidadDb(objeto);
    };

    const restarCantidadDb = (objeto) => {
        cart.map((item) => {
            let objDb = {};
            db.collection("products")
                .doc(item.id)
                .get()
                .then((doc) => {
                    if(doc.exists){
                        objDb = doc.data();
                        objDb.stock = objDb.stock - item.quantity;
                        db.collection("products").doc(item.id).set(objDb);
                    }
                });
        });
        let orden = {
            products: { cart },
            user: { objeto },
            date: moment().format("DD-MM-YYYY hh:mm:ss"),
            total: finallyPrice
        };
        db.collection('orders')
            .add(orden)
            .then(({id}) => setCod(id))
    };

    const totalPrice = () => {
        return cart.reduce((acc, {quantity, unitPrice}) => acc + quantity * unitPrice, 0).toFixed(2);
    }

    let finallyPrice = totalPrice();

    return (
        <div>
            <Formulario addProduct={addProduct} codigo={cod}></Formulario>
        </div>
    );
};

export default Checkout;