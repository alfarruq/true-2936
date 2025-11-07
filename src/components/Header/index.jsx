
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

import './style.css'


function Header() {
    return (
        <header className="container head" >
            <Link to={'/'} >
                <img className='logo1' src={logo} alt="eedf" />
            </Link>
            <hr className='hr'/>
            <ul>
                <li><Link className='link' to={'/brand'} >O бренде🧠</Link> </li>
                <li><Link className='link' to={'/'} > продукции🤝</Link> </li>
                <li><Link className='link' to={'/advantages'} > преимущества👍</Link> </li>
                <li><Link className='link' to={'/openclub'} > открыть клуб🤟</Link> </li>
                <li><Link className='link' to={'/contact'} > контакты🤙</Link> </li>
            </ul>
        </header>
    );
}

export default Header;