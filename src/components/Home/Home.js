import React from 'react';
import MovieData from '../../common/static/data';
import Header from '../../common/components/Header/Header';
import Footer from '../../common/components/Footer/Footer';
import PageContent from '../PageContent/PageContent'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            originalData: MovieData,
            passingData: MovieData,

        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        const keyword = event.target.value.toLowerCase();
        var foundData = {shows:[]};
        if(keyword.length >= 3){
          this.state.originalData.shows.map((show) => {
              if(show.title.toLowerCase().search(`${keyword}`) >= 0){
                    foundData.shows.push(show);
              }
            });
            this.setState({
                ...this.state,
                passingData: foundData
            })
        } else if(keyword.length < 3) {
            this.setState({
                ...this.state,
                passingData: this.state.originalData
            })
        }

    }

    render() {
        const data = this.state.passingData;
        return (
            <div>
                <Header 
                 handleSearch={this.handleSearch}
                />
                <PageContent 
                  data={data}
                />
                <Footer />
            </div>
        )
    }

}

export default Home;