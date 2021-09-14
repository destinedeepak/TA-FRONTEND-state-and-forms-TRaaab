import React from 'react';

class Registration extends React.Component {
  constructor() {
    super();
    this.fileInput = React.createRef();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
  }

  validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case 'username':
        errors.username =  value.length < 3 ? 'Username must be at least 3 characters' : ''
        break;
      case 'email':
        errors.email = this.validateEmail(value) ? "" : "Email is not valid!"
        break;
      case 'password':  
        errors.password = value.length < 6 ? 'Password must be at least 6 character' : ''
        break;
      case 'confirmPassword' :
        errors.confirmPassword = value !== this.state.password ? 'Password and confirm password must match' : ''
        break;
      default:
        break;
    }

    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.isSubmitActive());
    alert(this.state.username);
    alert(this.state.email);
    alert(this.state.password);
  };
  isSubmitActive(){
    return Object.keys(this.state.errors).reduce((acc,key)=>{
      if(this.state.errors[key]){
        acc = false;
      }
      return acc;
    },true)
  }
  render() {
    let errors = this.state.errors;
    return (
      <form className="" onSubmit={this.handleSubmit}>
        <h1>Register With Us</h1>
        <label htmlFor="username">Username</label>
        <input
          className={errors.username ? "error": ""}
          type="text"
          onChange={this.handleInput}
          name="username"
          id="username"
          value={this.state.username}
        />
        <span>{errors.username? errors.username:""}</span>
        <label htmlFor="email">Email</label>

        <input
          className={errors.email ? "error": ""}
          type="text"
          onChange={this.handleInput}
          name="email"
          id="email"
          value={this.state.email}
        />
        <span>{errors.email? errors.email:""}</span>

        <label htmlFor="password">Password</label>
        <input
          className={errors.password ? "error": ""}
          type="password"
          onChange={this.handleInput}
          name="password"
          id="password"
          value={this.state.password}
        />
        <span>{errors.password? errors.password:""}</span>

        <label htmlFor="confirmPassword">Password</label>
        <input
          className={errors.confirmPassword ? "error": ""}
          type="password"
          onChange={this.handleInput}
          name="confirmPassword"
          id="confirmPassword"
        />
        <span>{errors.confirmPassword? errors.confirmPassword:""}</span>

        <button type="submit" disabled={!this.isSubmitActive()}>Submit</button>
      </form>
    );
  }
}

export default Registration;
