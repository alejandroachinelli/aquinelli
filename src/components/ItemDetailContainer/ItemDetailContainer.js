import React, { useState, useEffect } from 'react'
import { Container, Header } from 'semantic-ui-react'
import ItemDetail from '../ItemDetail/ItemDetail'

import {db} from '../firebase/index';

function ItemDetailContainer({ match }) {

    const itemId = match.params.id;

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const datosFirebase = [];

    const getProduct = () => {
        db.collection("products").onSnapshot((querySnapshot) => {
            querySnapshot.forEach(doc => {
                datosFirebase.push({id: doc.id, ...doc.data()});
            });
            if(datosFirebase != null){
                setIsLoaded(true);
                setItems(datosFirebase);
            }else{
                setIsLoaded(true);
                setError("Error al cargar productos");
            }
            setItems(datosFirebase);
        });
    };

    useEffect(() => {
        setTimeout(()=>{
            getProduct();
        },2000)
    },[]);

    const resultProduct = items.filter(element => {
        return element.id === itemId;
    })

    if(error){
        return (
            <Container fluid textAlign="center">
                <Header as='h2' textAlign='center' color='red'>
                    Error
                </Header>
                <Header.Subheader>
                    Se produjo un error al cargar los detalles del producto: {error}
                    <br></br>
                    Lo estaremos solucionando. Lamentamos esto.
                </Header.Subheader>
            </Container>
        )
    }else if(!isLoaded){
        return(
            <Container fluid textAlign="center">
                <Header.Subheader>
                        <Header as='h3' textAlign="center" color="grey">
                            Cargando, por favor espere...
                        </Header>
                </Header.Subheader>
            </Container>
        )
    }else{
        return (
            <>
                {resultProduct.map((data) => {
                    return(
                        <Container fluid textAlign="center">
                            <ItemDetail product={data}></ItemDetail>
                        </Container>
                    )
                })}
            </>
        )
    }

}

export default ItemDetailContainer
