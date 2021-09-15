import React from 'react';

class Signupthree extends React.Component {
  render() {
    let { gender } = this.props.state;
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
            <div className="w-8 h-8 bg-gray-300 rounded text-center leading-8 text-white font-light mr-4">
              2
            </div>
            <span className="mr-16 text-gray-400 font-light ">Message</span>
            <div className="w-8 h-8 bg-primary text-white rounded text-center leading-8 font-light mr-4">
              3
            </div>
            <span className="mr-16 text-gray-400 font-light">Checkobox</span>
          </div>

          <h6 className="text-gray-400 text-xs mt-12">step 2/3</h6>
          <h2 className="text-blue font-bold text-xl mt-2 mb-12">Checkbox</h2>

          <div className="flex">
            <label
              htmlFor="male"
              className={
                gender === 'male'
                  ? 'border-2 px-28 py-12 mr-16 rounded text-6xl border-red-200'
                  : 'border px-28 py-12 mr-16 rounded text-6xl'
              }
            >
              🙍🏻‍♂️
            </label>
            <input
              type="radio"
              onChange={this.props.handleChange}
              value="male"
              name="gender"
              id="male"
              className="hidden"
            />
            <label
              htmlFor="female"
              className={
                gender === 'female'
                  ? 'border-2 px-28 py-12 mr-16 rounded text-6xl border-red-200'
                  : 'border px-28 py-12 mr-16 rounded text-6xl'
              }
            >
              👩‍💼
            </label>
            <input
              type="radio"
              onChange={this.props.handleChange}
              value="female"
              name="gender"
              id="female"
              className="hidden"
            />
          </div>
          <div className="border-t mt-8"></div>

          <div className="text-right">
            <button
              className="text-xs"
              onClick={this.props.handleStep}
              data-step="step2"
            >
              Back
            </button>
            <button
              onSubmit= {this.props.handleSubmit}
              className="bg-primary mt-8 text-white text-xs px-8 py-3 rounded-lg ml-12"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Signupthree;
