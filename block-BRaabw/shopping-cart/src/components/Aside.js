import React from 'react';
class Aside extends React.Component {
  render() {
    let sizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];
    let { activeSizes } = this.props.state;
    return (
      <section className="flex-20 mr-2">
        <h3 className="font-medium text-lg">Sizes:</h3>
        <div className="flex flex-wrap mt-6">
          {sizes.map((size, index) => (
            <div key={size}>
              <label
                htmlFor={size}
                className={
                  activeSizes.indexOf(size) !== -1
                    ? 'rounded-full inline-block text-xs font-light w-9 h-9 leading-9 text-center mr-2 mb-4 bg-black text-white'
                    : 'rounded-full inline-block text-xs font-light bg-gray-200 w-9 h-9 leading-9 text-center mr-2 mb-4 hover:bg-gray-400'
                }
              >
                {size}
              </label>
              <input
                type="checkbox"
                id={size}
                name={size + index}
                value={size}
                className="border hidden"
                onChange={this.props.handleSortBySize}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Aside;
