import React, { useState, useEffect } from 'react'
import { Container, Header } from 'semantic-ui-react'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer({ match }) {

    const itemId = parseInt(match.params.id);

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(()=>{
            fetch('https://mocki.io/v1/7b066785-9b5b-40e3-9a58-e7a9fc5bf7ec')
                .then(res => res.json())
                .then(
                    (result) => {
                    setIsLoaded(true);
                    setItems(result.itemsData);
                    console.log(result.itemsData);
                    },
                    (error) => {
                    setIsLoaded(true);
                    setError(error);
                    }
                )
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
                    Se produjo un error al cargar los detalles del producto: {error.message}
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
