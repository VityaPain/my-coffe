
import Header from '../header/header';
import Logo from '../logo/logo';

import './showcase.scss';

const Showcase = () => {
    return (
        <div className="showcase">
            <Header />
            <div className="showcase__img _ibg">
                <img src="./img/showcaseMain.png" alt="showcaseMain" />
            </div>
            <div className="showcase__text">
                <h1 className="showcase__text-title">
                    Everything You Love About Coffee
                </h1>
                <Logo 
                    color="white"/>
                <div className="showcase__text-descr">
                    <p>We makes every day full of energy and taste</p>
                    <br />
                    <p>Want to try our beans?</p>
                </div>
                <a href="#" className="showcase__text-btn">More</a>
            </div>
        </div>
    )
}

export default Showcase;