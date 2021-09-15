import React from 'react';

class Signupone extends React.Component {
  render() {
    let { firstName, lastName, dob, email, address } = this.props.state;
    console.log(firstName);
    return (
      <section className="flex rounded-lg shadow-xl h-600">
        <aside className="flex-35">
          <img
            className="w-full rounded-l-lg object-cover h-600"
            src="/images/random.jpeg"
            alt=""
          />
        </aside>
        <form className="p-16 pr-32 h-full w-full flex-65">
          <div className="flex items-center text-sm border-b pb-4 ">
            <div className="w-8 h-8 bg-primary rounded text-center leading-8 text-white font-light mr-4">
              1
            </div>
            <span className="mr-16 font-light">Sign Up</span>
            <div className="w-8 h-8 bg-gray-300 rounded text-center leading-8 text-gray-500 font-light mr-4">
              2
            </div>
            <span className="mr-16 text-gray-400 font-light ">Message</span>
            <div className="w-8 h-8 bg-gray-300 rounded text-center leading-8 text-gray-500 font-light mr-4">
              3
            </div>
            <span className="mr-16 text-gray-400 font-light">Checkobox</span>
          </div>
          <h6 className="text-gray-400 text-xs mt-12">step 1/3</h6>
          <h2 className="text-blue font-bold text-xl mt-2">Sign Up</h2>
          <div className="flex mt-8">
            <div className="mr-8 flex-50">
              <label htmlFor="" className="block text-xs text-gray-600 mb-1">
                First Name
              </label>
              <input
                className="border p-2 rounded-lg w-full"
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={this.props.handleChange}
                value={firstName}
              />
            </div>
            <div className="flex-50">
              <label htmlFor="" className="block text-xs text-gray-600 mb-1">
                Last Name
              </label>
              <input
                className="border p-2 rounded-lg w-full"
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={this.props.handleChange}
                value={lastName}
              />
            </div>
          </div>
          <div className="flex mt-4">
            <div className="mr-8 flex-50">
              <label htmlFor="" className="block text-xs text-gray-600 mb-1">
                Date of birth
              </label>
              <input
                className="border p-2 rounded-lg w-full"
                type="date"
                name="dob"
                onChange={this.props.handleChange}
                value={dob}
              />
            </div>
            <div className="flex-50">
              <label htmlFor="" className="block text-xs text-gray-600 mb-1">
                Email Address
              </label>
              <input
                className="border p-2 rounded-lg w-full"
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.props.handleChange}
                value={email}
              />
            </div>
          </div>

          <label htmlFor="" className="block text-xs text-gray-600 mb-1 mt-4">
            Address
          </label>
          <textarea
            id=""
            cols="30"
            rows="1"
            className="border p-2 rounded-lg w-full mt-1"
            onChange={this.props.handleChange}
            name="address"
            value={address}
          ></textarea>

          <div className="border-t mt-8"></div>

          <div className="text-right">
            <button
              className="bg-primary mt-8 text-white text-xs px-8 py-3 rounded-lg"
              onClick={this.props.handleStep}
              data-step="step2"
            >
              Next Step
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Signupone;
