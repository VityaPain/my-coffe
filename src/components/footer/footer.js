import Header from '../header/header';
import Logo from '../logo/logo'

import './footer.scss'

const Footer = () => {

    return(
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__list-item"><a href="#">Coffe House</a></li>
                <li className="footer__list-item"><a href="#">Our Coffe</a></li>
                <li className="footer__list-item"><a href="#">For your pleasure</a></li>
            </ul>
            <Logo 
                color="black"/>
        </footer>
    )
}

export default Footer;