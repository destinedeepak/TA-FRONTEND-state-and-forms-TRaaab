import React from 'react';
import { products } from '../data.json';
class Products extends React.Component {
  getDollar = (price) => {
    price = String(price);
    if (price.indexOf('.') === -1) {
      return price;
    } else {
      return price.slice(0, price.indexOf('.'));
    }
  };
  getCent = (price) => {
    price = String(price);
    if (price.indexOf('.') === -1) {
      return '';
    } else {
      return price.slice(price.indexOf('.'));
    }
  };
  render() {
    let { activeSizes, activeOrder } = this.props.state;
    let productsToRender;
    let productsBySize = products.filter((product) => {
      for (let index = 0; index < products.length; index++) {
        if (activeSizes.indexOf(product.availableSizes[index]) !== -1) {
          return product;
        }
      }
    });
    if (activeSizes.length !== 0) {
      productsToRender = productsBySize;
    } else {
      productsToRender = products;
    }
    if (activeOrder === 'l-h') {
      productsToRender = productsToRender.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (activeOrder === 'h-l') {
      productsToRender = productsToRender.sort((a, b) => {
        return b.price - a.price;
      });
    }

    return (
      <section className="flex-80 pt-2">
        <div className="flex justify-between">
          <p className="text-sm font-light">
            {productsToRender.length} Product(s) found
          </p>
          <div className="flex items-center">
            <h3 className="font-light mr-2">Order by</h3>
            <select
              name=""
              id=""
              className="font-light border p-1.5 hover:bg-gray-400"
              onChange={this.props.handleSortByPrice}
            >
              <option value="default">Select</option>
              <option value="l-h">Lowest to highest</option>
              <option value="h-l">Highest to lowest </option>
            </select>
          </div>
        </div>
        <ul className="flex pt-5 flex-wrap">
          {productsToRender.map((product,index) => (
            <li
              key={product.id}
              className="flex-25 text-center hover:shadow-2xl p-3 mb-6 relative"
            >
              <img
                src={'/static/products/' + product.sku + '_1.jpg'}
                className="h-333 object-cover"
                alt="tshirts"
              />
              <h3 className="mt-4">{product.title}</h3>
              <div className="bg-primary w-4 h-0.5 inline-block mt-4 mb-2"></div>
              <h2 className="text-2xl">
                <small className="text-sm">$</small>
                {this.getDollar(product.price)}
                <small className="text-sm">{this.getCent(product.price)}</small>
              </h2>
              <h2 className="text-xl text-gray-400">
                <small className="text-sm">or {product.installments} x</small>$
                {(product.price / product.installments).toFixed(2)}
              </h2>
              <button
                className="bg-black text-white w-full py-3 mt-2 hover:bg-yellow-400"
                onClick={() => {this.props.addToCart(index)}}
              >
                Add to cart
              </button>
              {product.isFreeShipping ? (
                <span className="absolute top-0 right-4 text-xs p-1 bg-black text-white font-light">
                  Free shipping
                </span>
              ) : (
                <span className="absolute top-0 right-4 text-xs p-1 bg-black text-white font-light hidden">
                  Free shipping
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Products;
