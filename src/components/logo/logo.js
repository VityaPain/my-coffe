import {Component} from 'react';

import './logo.scss';

class Logo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let color;
        if (this.props.color === "white") {
            color="./img/logoWhite.svg";
        } else {
            color = "./img/logoBlack.svg"
        }
        return(
            <div className="logo">
                <span style={{backgroundColor: `${this.props.color}`}}></span>
                <img src={color} alt="showcaselogo"/>
                <span style={{backgroundColor: `${this.props.color}`}}></span>
            </div>
        )
    }
}

export default Logo