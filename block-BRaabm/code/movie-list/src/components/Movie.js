import React from 'react';
import movies from '../data';
class Movie extends React.Component{
    constructor(){
        super()
    }
    render(){
        let movie =  movies[this.props.activeIndex]
        console.log(movie);
        return (
            <div className="p-12">
                <img src={movie[0]} alt="" />
            </div>
        )
    }
}

export default Movie;