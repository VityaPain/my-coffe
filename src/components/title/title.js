import {Component} from 'react';

import './title.scss';

class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <h2>{this.props.text}</h2>
        )
    }

}

export default Title;