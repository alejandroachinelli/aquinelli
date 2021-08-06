import React from 'react';
import { Button, Icon, Menu, Header } from 'semantic-ui-react';
import Cardwidget from '../Cardwidget/Cardwidget';

import { Link } from "react-router-dom";

function Navbar() {
    return (
            <Menu>
                <Menu.Item>
                    <Link to='/'>
                        <Header as='h4' color='red'>
                            Aquinelli
                            <Header.Subheader>
                                E-commerce
                            </Header.Subheader>
                        </Header>
                    </Link>
                    <Link to='/'>
                        <Cardwidget/>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/'>
                        <Button animated>
                            <Button.Content visible>
                                    Inicio
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name="home"></Icon>
                            </Button.Content>
                        </Button>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/store'>
                        <Button animated>
                            <Button.Content visible>
                                    Tienda
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name="list layout"></Icon>
                            </Button.Content>
                        </Button>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/about'>
                        <Button animated>
                            <Button.Content visible>
                                    Acerca de
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name="exclamation circle"></Icon>
                            </Button.Content>
                        </Button>
                    </Link>
                </Menu.Item>
                <Menu.Item position="right">
                    <Link to="/cart">
                        <Button animated>
                            <Button.Content visible>
                                    Carrito
                            </Button.Content>
                            <Button.Content hidden>
                                <Icon name="shopping cart"/>
                            </Button.Content>
                        </Button>
                    </Link>
                </Menu.Item>
            </Menu>
    );
}

export default Navbar