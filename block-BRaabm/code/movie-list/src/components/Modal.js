import React from 'react';
import movies from '../data';
class Movie extends React.Component{
    constructor(props) {
        super(props);
        this.movie = movies[this.props.activeIndex];
    }
    
    render(){
        console.log(movies);
        return (
            <div className="px-80">
                <img className="w-full object-cover rounded" src={this.movie.Images[0]} alt="" />
                <div>
                    <h3 className="text-white text-center text-2xl mt-4">{this.movie.Title}</h3>
                </div>
            </div>
        )
    }
}

export default Movie;