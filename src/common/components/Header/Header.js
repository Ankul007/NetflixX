import React from 'react';
import { withRouter } from 'react-router';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }
    handleBack(){
        this.props.history.push("/");
    }
    render(){
        const showBack = this.props.match.url !=="/";
    return(
        <div className="Header">
            <img src="/images/netflixicon.jpg" alt="header" id="image"/>
            {showBack ?
                (<span className="back" onClick={this.handleBack} >Back</span>) :
                (<div className="search"><span>Search Movies   </span><input onChange={(e)=>this.props.handleSearch(e)} /></div>)
            }
        </div>
    )}
}

export default withRouter(Header);