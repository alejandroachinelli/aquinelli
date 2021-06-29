import React, { useState, useEffect } from 'react'
import { Container, Header } from 'semantic-ui-react'
import ItemList from '../ItemList/ItemList';

function Itemcontainer(props) {

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
                setTimeout(()=>{
                    // Instale la dependencia npm install -g json-server
                    // Luego corri con json-server --watch itemData.json que esta en la direccion aquinelli/src/itemData.json y me crea la direccion http://localhost:3000/itemsData
                    // para poder usarlo en el fetch.
                    // despues inicialice el proyecto en otro puerto para hacer la prueba
                    fetch('http://localhost:3000/itemsData')
                        .then(res => res.json())
                        .then(
                            (result) => {
                            setIsLoaded(true);
                            setItems(result);
                            },
                            (error) => {
                            setIsLoaded(true);
                            setError(error);
                            }
                        )
                },2000)
            });

    if(error){
        return (
            <Container fluid textAlign="center">
                <Header as='h2' textAlign='center' color='red'>
                    Error
                </Header>
                <Header.Subheader>
                    Se produjo un error al cargar los productos: {error.message}
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

export default Itemcontainer
