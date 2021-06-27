import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import ItemList from '../ItemList/ItemList'

function Itemcontainer(props) {
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
                <ItemList></ItemList>
            </Container>
        </>
    )
}

export default Itemcontainer
