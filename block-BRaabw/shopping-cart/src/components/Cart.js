import React from 'react';
import { products } from '../data.json';
class Cart extends React.Component {
  render() {
    let { cart, isCartOpen } = this.props.state;
    let itemKeys = Object.keys(cart);
    let subtotal = products.reduce((acc, product, index) => {
      if (itemKeys.indexOf(String(index)) !== -1) {
        acc = acc + product.price * cart[index];
      }
      return acc;
    }, 0);
    return (
      <section>
        <button
          className={
            isCartOpen
              ? 'text-3xl text-white bg-black p-2 w-16 h-16 text-center leading-16 absolute top-0 right-0 hidden'
              : 'text-3xl text-white bg-black p-2 w-16 h-16 text-center leading-16 absolute top-0 right-0'
          }
          onClick={this.props.handleCartToggle}
        >
          <i className="fas fa-shopping-cart"></i>
        </button>
        <div className="flex">
          <span className="">X</span>
          <div
            className={
              isCartOpen
                ? 'absolute top-0 right-0 min-h-screen '
                : 'absolute top-0 right-0 min-h-screen hidden'
            }
          >
            <div className="w-440 pt-12 bg-secondary  mx-auto">
              <div className="flex justify-center items-center">
                <span className="text-3xl text-white bg-secondary p-2 w-16 h-16 text-center leading-16">
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <span className="inline-block text-white ml-2 text-2xl pb-3">
                  Cart
                </span>
              </div>
              <ul className="pt-4 px-6">
                {itemKeys.length === 0 ? (
                  <p className="text-white text-center">
                    Add some products in the card
                  </p>
                ) : (
                  ''
                )}
                {itemKeys.map((index) => (
                  <li
                    key={index}
                    className="flex border-t border-black pt-6 mb-4"
                  >
                    <img
                      src={
                        '/static/products/' + products[index]['sku'] + '_2.jpg'
                      }
                      className="w-60 h-86"
                      alt=""
                    />
                    <div className="text-white ml-4 mt-2">
                      <h3>Cat Tee Black T-Shirt</h3>
                      <h5 className="text-gray-600">
                        {products[index]['availableSizes'][0]} |{' '}
                        {products[index]['title']}
                      </h5>
                      <h5 className="text-gray-600">Quantity: {cart[index]}</h5>
                    </div>
                    <div className="text-white ml-6">
                      <h3
                        className="inline-block ml-8 text-black text-lg cursor-pointer"
                        onClick={() => {
                          this.props.removeFromCart(index);
                        }}
                      >
                        ❌
                      </h3>
                      <h3 className="my-2 text-primary ">
                        $ {(products[index]['price'] * cart[index]).toFixed(2)}
                      </h3>
                      <div className="mt-2 ml-1 mt-2">
                        <button
                          className="w-7 h-7 bg-black"
                          onClick={() => {
                            this.props.decreaseQuantity(index);
                          }}
                        >
                          -
                        </button>
                        <button
                          className="w-7 h-7 bg-black"
                          onClick={() => {
                            this.props.addToCart(index);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="p-6 shadow-2xl border-t border-black mt-12">
                <div className="flex justify-between ">
                  <h2 className="text-gray-400">SUBTOTAL</h2>
                  <h3 className="text-primary text-xl">
                    $ <span>{subtotal.toFixed(2)}</span>
                  </h3>
                </div>
                <button className="bg-black text-white w-full py-3 mt-8">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
