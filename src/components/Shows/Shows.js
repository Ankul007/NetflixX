import React from 'react';

import { withRouter } from 'react-router';
import './Shows.css';
import Header from '../../common/components/Header/Header';

class Shows extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {},
      loading: true,
      loaded: false
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://omdbapi.com/?i=${id}&apikey=8a1266c`)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          data: myJson,
          loaded: true,
          loading: false
        });
      });

  }

    render() {
      const {data, loading, loaded} = this.state;
      console.log(data);
        return(
          <div>
          <Header />
            {loading &&
              (<img src='/images/loading.png' alt="chichi"/>)
            }
            {loaded && data.Response === "True" &&
                (<div>
                  <div className="showContainer">
                    <h2 className={["float", "width14"].join(" ")}>{data.Title}</h2>
                    <h2 className={["float", "width14"].join(" ")}>{data.Year}</h2>
                    <h2 className={["float", "width14"].join(" ")}>Rating {data.imdbRating}</h2>
                    <img className={["float", "image"].join(" ")} src={data.Poster} alt="poster"/>
                    <p className="plot">{data.Plot}</p>
                  </div>
                  <div>
                <iframe
                  title="youtube Trailer"
                  className="iframe"
                  align="center"
                  src={`https://www.youtube-nocookie.com/embed/${this.props.match.params.trailer}?rel=0&amp;amp;controls=0&amp;amp;showinfo=0 frameborder="0" allowFullScreen="allowFullScreen"`}>
                  </iframe>
                  </div>
                </div>)
            }
          </div>
        )
    }
}

export default withRouter(Shows);