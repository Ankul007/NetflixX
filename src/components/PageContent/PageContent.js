import React from "react";
import BoxContainer from "../../common/components/BoxContainer/BoxContainer";

class PageContent extends React.Component {

    
    render(){
        const {
            shows
        } = this.props.data; 
        return(
            <div>
                {shows.map((show, index) => (
                        <BoxContainer
                            key={show.imdbID}
                            title={show.title}
                            year={show.year}
                            description={show.description}
                            poster={show.poster}
                            imdbID={show.imdbID}
                            trailer={show.trailer}
                        />
                ))}
            </div>
        )
    }

}

export default PageContent;