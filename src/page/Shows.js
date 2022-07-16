import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ShowAbout } from "./ShowAbout"

class Shows extends React.Component {

    
    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
            "https://api.tvmaze.com/search/shows?q=all")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;
        

        return (
            <div className="App">
                <div className="card-group m-4">
                    {items.map((item) => (
                        <ul key={item.show.id}>
                  

                            <div className="card border-dark m-3" style={{ width: "18rem" }}>

                                <img src={item.show.image.medium} alt="movie poster"></img>
                                <div className="card-body">
                                    <h3 className="card-title">{item.show.name}</h3>
                                    <p className="card-text"><b>Genre</b>
                                        {item.show.genres.map((genre, i) => (
                                            <div>
                                                <p className="card-text">{(genre)} </p>
                                            </div>
                                        ))}
                                    </p>
                                    <p className="card-text"><b>Rating:</b> {item.show.rating.average}</p>
                                    <a href={'https://www.imdb.com/title/' + item.show.externals.imdb} className="btn btn-info m-3">IMDB</a>
                                    <a href={item.show.url} className="btn btn-primary">Watch it!</a>
            
                                </div>

                            </div>

                        </ul>
                    ))}
                </div>
            </div>
        );
    }
}
export default Shows;
