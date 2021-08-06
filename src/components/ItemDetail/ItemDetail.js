import React from 'react'
import { Container, Image, Grid, Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function ItemDetail({product}) {

    debugger;
    console.log(product);

    return(
        <>
            <Grid>
                <Grid.Column width={4}>
                        <Card>
                            <Image src={product.pictureUrl} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>{product.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Precio: {product.unitPrice}</span>
                                </Card.Meta>
                                <Card.Meta>
                                    <span className='date'>Stock: {product.stock}</span>
                                </Card.Meta>
                            </Card.Content>
                        </Card>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Card.Content>
                        <Container textAlign='center'>{product.description}</Container>
                        <br></br>
                        <br></br>
                        <Container>
                            <Button>
                                Agregar al carrito
                            </Button>
                            <br></br>
                            <br></br>
                            <Link to="/store">
                                <Button compact>
                                    <Icon name="angle left"></Icon>
                                    Volver
                                </Button>
                            </Link>
                        </Container>
                    </Card.Content>
                </Grid.Column>
            </Grid>
        </>
    )

}

export default ItemDetail