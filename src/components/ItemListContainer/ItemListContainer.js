import React, { useState, useEffect } from 'react'
import { Container, Header } from 'semantic-ui-react'
import ItemList from '../ItemList/ItemList';

import {db} from '../firebase/index';

function ItemListContainer(props) {

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

    if(error){
        return (
            <Container fluid textAlign="center">
                <Header as='h2' textAlign='center' color='red'>
                    Error
                </Header>
                <Header.Subheader>
                    Se produjo un error al cargar los productos: {error}
                    <br></br>
                    Lo estaremos solucionando. Lamentamos esto.
                </Header.Subheader>
            </Container>
        )
    }else if(!isLoaded){
        return(
            <Container fluid textAlign="center">
                <Header as='h2' textAlign='center' color='red'>
                    {props.title}
                </Header>
                <Header.Subheader>
                        {props.greeting}
                        <br></br>
                        <Header as='h3' textAlign="center" color="grey">
                            Cargando, por favor espere...
                        </Header>
                </Header.Subheader>
            </Container>
        )
    }else{
        return (
            <>
                <br></br>
                <Container fluid textAlign="center">
                    <Header as='h2' textAlign='center' color='red'>
                        {props.title}
                    </Header>
                    <Header.Subheader>
                        {props.greeting}
                    </Header.Subheader>
                    <br></br>
                    <ItemList items={items}></ItemList>
                </Container>
            </>
        )
    }
}

export default ItemListContainer
