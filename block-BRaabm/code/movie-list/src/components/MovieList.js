import React from 'react';
import movies from '../data';
import Movie from './Movie';
class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null,
    };
  }
  handleClick(index) {
    return <Movie activeIndex={index} key={index} />;
  }
  render() {
    return (
      <div >
        <ul className="flex justify-between px-20 flex-wrap hide">
          {movies.map((movie, index) => (
            <li className="flex-31 shadow-2xl rounded mb-12" key={index}>
              <img
                className="w-full h-xl object-cover rounded-t"
                src={movie.Images[0]}
                alt=""
              />
              <div>
                <h3>{movie.Title}</h3>
                <h4>Released at {movie.Released}</h4>
                <button
                  className="more-btn"
                  onClick={() => {
                    this.handleClick(index);
                  }}
                >
                  More Info
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-black h-screen">
4           <Movie />
        </div>
      </div>
    );
  }
}

export default MovieList;
