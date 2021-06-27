import Logo from '../img/logo.png';
import { Image } from 'semantic-ui-react';

function CardWidget() {
    return (
        <a href='#'>
            <Image src={Logo} width='50px' height='30px'></Image>
        </a>
    );
}

export default CardWidget;
