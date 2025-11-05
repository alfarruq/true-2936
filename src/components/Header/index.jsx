
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

import './style.css'


function Header() {
    return (
        <header className="container" >
            <Link to={'/'} >
                <img src={logo} alt="" />
            </Link>
            <a href="/">
            </a>
            <ul>
                <li><Link to={'/brand'} >O бренде</Link> </li>
                <li><Link to={'/'} > продукциИ</Link> </li>
                <li><Link to={'/advantages'} > преимущества</Link> </li>
                <li><Link to={'/openclub'} > открыть клуб</Link> </li>
                <li><Link to={'/contact'} > контакты</Link> </li>
            </ul>
        </header>
    );
}

export default Header;