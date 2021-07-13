import React, { useState, useEffect } from 'react'
import { Container, Header } from 'semantic-ui-react'

function Home(props) {

    return(
        <Container fluid textAlign="center">
                    <Header as='h2' textAlign='center' color='red'>
                        Bienvenidos al ecommerce
                    </Header>
                    <Header.Subheader>
                        Para dirigirse a la tienda hacer click en Tienda
                    </Header.Subheader>
                    <br></br>
        </Container>
    );

}

export default Home