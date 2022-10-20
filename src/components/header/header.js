import './header.scss'


const Header = () => {
    return (
        <header className="header">
            <ul className="header__row">
                <li className="header__row-item"> <a href="#">Coffe house</a></li>
                <li className="header__row-item"> <a href="#">Our coffe</a></li>
                <li className="header__row-item"> <a href="#">For your pleasure</a></li>
            </ul>
        </header>
    )
}

export default Header;