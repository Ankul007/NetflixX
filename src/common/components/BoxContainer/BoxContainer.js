import React from 'react';
import { withRouter } from 'react-router';

import './BoxContainer.css';

class BoxContainer extends React.Component {

    constructor(props) {
        super(props);
        this.handleRedirect = this.handleRedirect.bind(this);
    }
    
    handleRedirect(){
        this.props.history.push(`/shows/${this.props.imdbID}/${this.props.trailer}`);
    }

    render() {

        const {
            title,
            year,
            description,
            poster,
        } = this.props;

        return(
            <div className="container" onClick={this.handleRedirect}>
                <img src={`../../images/posters/${poster}`} className="images" alt="nope"/>
                <h5>{title}</h5>
                <h5>{year}</h5>
                <p>{description}</p>
            </div>
        )
    }

}

export default withRouter(BoxContainer);