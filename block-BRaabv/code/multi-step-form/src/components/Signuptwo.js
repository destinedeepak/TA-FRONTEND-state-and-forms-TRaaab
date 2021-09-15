import React from 'react';

class Signuptwo extends React.Component {
  render() {
    let { message, choice } = this.props.state;
    return (
      <section className="flex rounded-lg shadow-xl h-600">
        <aside className="flex-35">
          <img
            className="w-full rounded-l-lg object-cover h-600"
            src="/images/random.jpeg"
            alt=""
          />
        </aside>
        <form action="" className="p-16 pr-32 h-full w-full flex-65">
          <div className="flex items-center text-sm border-b pb-4 ">
            <div className="w-8 h-8 bg-gray-300 rounded text-center leading-8 text-white font-light mr-4">
              1
            </div>
            <span className="mr-16 font-light">Sign Up</span>
            <div className="w-8 h-8  bg-primary rounded text-center leading-8 text-white font-light mr-4">
              2
            </div>
            <span className="mr-16 text-gray-400 font-light ">Message</span>
            <div className="w-8 h-8 bg-gray-300 rounded text-center leading-8 text-gray-500 font-light mr-4">
              3
            </div>
            <span className="mr-16 text-gray-400 font-light">Checkobox</span>
          </div>
          <h6 className="text-gray-400 text-xs mt-12">step 2/3</h6>
          <h2 className="text-blue font-bold text-xl mt-2">Message</h2>
          <label htmlFor="" className="block text-xs text-gray-600 mb-1 mt-4">
            Message
          </label>
          <textarea
            name="message"
            cols="30"
            rows="8"
            className="border p-2 rounded-lg w-full mt-1"
            onChange={this.props.handleChange}
            value={message}
          ></textarea>

          <div className="flex items-center mt-8">
            <input type="radio" name="choice" value="choiceone" checked={choice === 'choiceone'} onChange={this.props.handleChange} className="mr-3" />
            <label htmlFor="" className="text-gray-400  text-xs mr-10">
              The number one choice
            </label>
            <input type="radio" name="choice" value="choicetwo" checked={choice === 'choicetwo'}  onChange={this.props.handleChange} className="mr-3" />
            <label htmlFor="" className="text-gray-400  text-xs">
              The number one choice
            </label>
          </div>

          <div className="border-t mt-8"></div>

          <div className="text-right">
            <button
              type="submit"
              className="text-xs"
              onClick={this.props.handleStep}
              data-step="step1"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-primary mt-8 text-white text-xs px-8 py-3 rounded-lg ml-12"
              onClick={this.props.handleStep}
              data-step="step3"
            >
              Next Step
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Signuptwo;
