import React, {
  Component
} from 'react';

import './App.css';

class App extends Component {

  // This is a function that only runs ONCE when the component
  // is loaded
  //The constructor is where we set up our state variables for the first time
  constructor(){
    super();
    this.state = {
      currentNumber: 89,
      divisible_by_two: true
    }
  } // end of constructor

  //Input onChange method

  onNumberInputChange = event => {
    // prevent the number from doing what it normally does, because wants to handle the logic manually
    // event.target.preventDefault();

    // event.target.value simply means the new number that has been typed into the box
    const newNumber = event.target.value;

    const divisible_by_two = (newNumber % 2 === 0);

    this.setState({
      currentNumber: newNumber,
      //the code below changes the key "divisible_by_two" to the value of the variable "divisble_by_two" that we defined in this function
      divisible_by_two
    });




  }



  render() {
    return (
      <div className="App">
        <h1>Kevin's Divisibility Rules Checker</h1>
        <h2>The current number is <span className="current-number">{this.state.currentNumber}</span></h2>
        <label htmlFor="number-input"> Please input a number: <input value={this.state.currentNumber} onChange={this.onNumberInputChange} id="number-input" type="number"></input></label>

        <hr/>

        <h3>This number <span className={this.state.divisible_by_two ? "true-color" : "false-color"}>{this.state.divisible_by_two ? "is" : "is not"}</span> divisible by two.</h3>


      </div>



    );
  } // end of render function
} //End of App Class Component

export default App;