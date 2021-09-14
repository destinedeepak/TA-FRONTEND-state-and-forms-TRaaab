import React from 'react';
import movies from '../data';
import Modal from './Modal';
class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null,
    };
  }
  handleClick = (index) => {
    this.setState({
      activeIndex: index,
    });
  };
  handleToggle = () => {
    this.setState({
      activeIndex: null,
    });
  };
  isActive() {
    if (this.state.activeIndex || this.state.activeIndex === 0) return true;
    else return false;
  }
  render() {
    return (
      <div>
        {!this.isActive() ? (
          <ul
            className="flex justify-between px-20 flex-wrap"
          >
            {movies.map((movie, index) => (
              <li
                className="flex-31 shadow-2xl rounded mb-12 relative pb-8"
                key={index}
              >
                <img
                  className="w-full h-xl object-cover rounded-t"
                  src={movie.Images[0]}
                  alt=""
                />
                <div>
                  <h3 className="text-white text-center text-2xl mt-2">
                    {movie.Title}
                  </h3>
                  <h4 className="text-white text-center">
                    Released at {movie.Released}
                  </h4>
                  <button
                    className="more-btn text-white absolute top-4 right-4"
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
        ) : (
          <div>
            <button
              onClick={this.handleToggle}
              className="absolute top-40 right-96 text-2xl"
            >
              ❌
            </button>
            <Modal activeIndex={this.state.activeIndex} />
          </div>
        )}
      </div>
    );
  }
}

export default MovieList;
