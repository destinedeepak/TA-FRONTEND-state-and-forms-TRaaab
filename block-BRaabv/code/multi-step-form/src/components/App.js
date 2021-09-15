import React from 'react';
import Signupone from './Signupone';
import Signuptwo from './Signuptwo';
import Signupthree from './Signupthree';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 'step1',
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      address: '',
      message: '',
      choice: '',
      gender: '',
    };
  }
  getStep = () => {
    let activeStep = this.state.activeStep;
    // eslint-disable-next-line default-case
    switch (activeStep) {
      case 'step1':
        return (
          <Signupone
            handleStep={this.handleStep}
            handleChange={this.handleChange}
            state={this.state}
          />
        );
      case 'step2':
        return (
          <Signuptwo
            handleStep={this.handleStep}
            handleChange={this.handleChange}
            state={this.state}
          />
        );
      case 'step3':
        return (
          <Signupthree
            handleStep={this.handleStep}
            handleChange={this.handleChange}
            state={this.state}
          />
        );
    }
  };

  handleStep = (event) => {
    event.preventDefault();
    let step = event.target.dataset.step;
    this.setState({
      activeStep: step,
    });
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]:value
    })
  };

  render() {
    return <main className="p-20">{this.getStep()}</main>;
  }
}

export default App;
