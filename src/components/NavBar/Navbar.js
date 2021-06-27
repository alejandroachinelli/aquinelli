import React from 'react';
import { Button, Icon, Menu, Header } from 'semantic-ui-react';
import Cardwidget from '../Cardwidget/Cardwidget';

function Navbar() {
    return (
        <Menu>
            <Menu.Item>
                <Header as='h4' color='red'>
                    Aquinelli
                    <Header.Subheader>
                    E-commerce
                    </Header.Subheader>
                </Header>
                <Cardwidget/>
            </Menu.Item>
            <Menu.Item>
                <Button animated>
                    <Button.Content visible>Inicio</Button.Content>
                    <Button.Content hidden>
                        <Icon name="home"></Icon>
                    </Button.Content>
                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button animated>
                    <Button.Content visible>Noticias</Button.Content>
                    <Button.Content hidden>
                        <Icon name="bell"></Icon>
                    </Button.Content>
                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button animated>
                    <Button.Content visible>Contacto</Button.Content>
                    <Button.Content hidden>
                        <Icon name="address book"></Icon>
                    </Button.Content>
                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button animated>
                    <Button.Content visible>Acerca de</Button.Content>
                    <Button.Content hidden>
                        <Icon name="building"></Icon>
                    </Button.Content>
                </Button>
            </Menu.Item>
        </Menu>
    );
}

export default Navbar