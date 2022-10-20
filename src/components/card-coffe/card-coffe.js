import { Component } from "react";

import './card-coffe.scss';

class CardCoffe extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <a href="#" className="card">
                <div className="card__img _ibg">
                    <img src={this.props.src} alt={this.props.label} />
                </div>
                <div className="card__text">{this.props.name}</div>
                <div className="card__price">{this.props.price}</div>
            </a>
        )
    }
}

export default CardCoffe;