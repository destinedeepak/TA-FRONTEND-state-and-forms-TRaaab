import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        counter: 0,
        steps:1,
        maxValue: Infinity
    }
  }
  handleOperation = (event) => {
     const innerText = event.target.innerText;
     const variable = this.state.steps;
     const maxValue = this.state.maxValue;
     if(innerText === "Increment"){
         this.setState({
             counter: this.state.counter + variable > maxValue ? this.state.counter : this.state.counter + variable
         })
     }else if(innerText === "Decrement"){
        this.setState({
            counter: this.state.counter - variable
        })
    }else if(innerText === "Reset"){
        this.setState({
            counter: 0,
            steps:1,
            maxValue: Infinity
        })
    }
  }
  handleStepIncrement = (event) => {
      this.setState({
        steps: +event.target.innerText
      })
  }
  handleMaxValue = (event) => {
    this.setState({
        maxValue: +event.target.innerText
      })
  }
  getButtonStyle(){
  }
  render() {
    return (
      <main className="bg-blue-200 h-screen pt-20 px-80 text-center">
        <h1 className="text-6xl font-bold mb-16">{this.state.counter}</h1>
        <div className="flex justify-around">
          <div>
            <h2 className="text-5xl mb-4">Steps</h2>
            <div>
            {new Array(3).fill("", 0, 3).map((ele, i) => (
                <button className = {this.state.steps === (i+1)*5 ? "px-9 py-5 mr-4 text-2xl rounded bg-blue-900" : "bg-blue-500 px-9 py-5 mr-4 text-2xl rounded"}  onClick={this.handleStepIncrement}>{++ i*5}</button>
            ))}
            </div>
          </div>
          <div>
            <h2 className="text-5xl mb-4">Max Value</h2>
            <div>
            {new Array(3).fill("", 0, 3).map((ele, i) => (
                <button className={this.state.maxValue === (i === 0 ? 15 : i*100) ? "bg-blue-900 px-9 py-5 mr-4 text-2xl rounded":"bg-blue-500 px-9 py-5 mr-4 text-2xl rounded"} onClick={this.handleMaxValue}>{i === 0 ? 15 : i*100 }</button>
            ))}
            </div>
          </div>
        </div>
        <div className="flex justify-around mt-16">
              <button className="bg-green-500 px-16 py-5 text-2xl text-white rounded" onClick={this.handleOperation}>Increment</button>
              <button className="bg-green-500 px-16 py-5 text-2xl text-white rounded" onClick={this.handleOperation}>Decrement</button>
              <button className="bg-green-500 px-16 py-5 text-2xl text-white rounded" onClick={this.handleOperation}>Reset</button>
          </div>
      </main>
    );
  }
}

export default App;
