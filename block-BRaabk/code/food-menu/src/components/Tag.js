import React from 'react';
import Item from './Item';

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeCategory: 'all'
    }
  }
  handleClick = (category) => {
      this.setState({
          activeCategory:category
      })
  }
  render() {
    return (
      <section>
        <div className="text-center mt-4">
          {['all', 'breakfast', 'lunch', 'shakes'].map((category) => (
            <button className={category === this.state.activeCategory ? "bg-secondary mr-2 py-2 px-4 rounded" : "mr-2 py-2 px-4 rounded"} onClick={()=>{this.handleClick(category)}}>
              {category}
            </button>
          ))}
        </div>
        <Item activeCategory={this.state.activeCategory} />
      </section>
    );
  }
}

export default Tag;
