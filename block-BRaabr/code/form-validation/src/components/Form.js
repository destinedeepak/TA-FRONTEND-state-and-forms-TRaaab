import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.fileInput = React.createRef();
    this.state = {
      text: '',
      date: '',
      textarea: '',
    };
  }
  handleInput = ({ target }) => {
    let { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
      event.preventDefault();
      alert(this.state.text, this.state.date, this.state.textarea)
      alert(this.fileInput.current.files[0].name);
  }
  render() {
    return (
      <form className="" onSubmit={this.handleSubmit}>
        <label htmlFor="text">Text Input</label>
        <input
          type="text"
          onChange={this.handleInput}
          name="text"
          id="text"
          value={this.state.text}
        />
        <label htmlFor="date">Date Input</label>
        <input
          type="date"
          onChange={this.handleInput}
          name="date"
          id="date"
          value={this.state.date}
        />
        <label htmlFor="file" ></label>
        <input type="file" ref={this.fileInput} />

        <label htmlFor="readonly">Readonly Input</label>
        <input type="text" id="readonly" readOnly={true} />

        <label htmlFor="disable">Disable Input</label>
        <input type="text" id="readonly" disabled={true} />

        <label htmlFor="textarea">TextArea Input</label>
        <textarea
          onChange={this.handleInput}
          name="textarea"
          id="textarea"
          rows={10}
          value={this.state.textarea}
        ></textarea>

        <label htmlFor="textarea1">Disabled textArea Input</label>
        <textarea
          onChange={this.handleInput}
          id="textarea1"
          rows={10}
          disabled={true}
        ></textarea>
        
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
