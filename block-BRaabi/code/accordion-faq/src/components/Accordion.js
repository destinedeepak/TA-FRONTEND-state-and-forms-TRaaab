import React from 'react';
import data from '../data';
class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFAQ: null,
    };
  }
  handleClick = (event, index) => {
    if (this.state.activeFAQ || this.state.activeFAQ === 0) {
      this.setState({
        activeFAQ: null,
      });
    } else {
      this.setState({
        activeFAQ: index,
      });
    }
  };
  render() {
    return ( 
      <main className="bg-primary px-80 pt-20 h-screen">
        <section>
            <h1 className="text-3xl text-center mb-6">AltCampus FAQ</h1>
          {data.map((faq, index) => (
            <article className="mb-2">
              <h2
                className={
                  this.state.activeFAQ === index
                    ? 'text-2xl border-2 p-4 border-yellow-800 bg-close cursor-pointer'
                    : 'text-2xl border-2 p-4 border-yellow-800 bg-open cursor-pointer '
                }
                onClick={(event) => {
                  this.handleClick(event, index);
                }}
              >
                {faq.Q}
                <span className="ml-12">
                  {this.state.activeFAQ === index ? (
                    <i class="fas fa-hand-point-down"></i>
                  ) : (
                    <i class="fas fa-hand-point-up"></i>
                  )}
                </span>
              </h2>
              <p
                className={
                  this.state.activeFAQ === index
                    ? 'bg-secondary border-2 border-black-100 p-4 show'
                    : 'hide'
                }
              >
                {faq.A}
              </p>
            </article>
          ))}
        </section>
      </main>
    );
  }
}

export default Accordion;
