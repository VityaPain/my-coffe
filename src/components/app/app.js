import { Component } from 'react';

import Showcase from '../showcase/showcase';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';

import './style.scss';
import '../../scss/generalstyle.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="App">
                <Showcase />
                <AboutUs />
                <OurBest />
                <Footer />
            </div>
        )
    }
}

export default App;
