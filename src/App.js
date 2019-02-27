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
      divisible_by_two: false
    }
  } // end of constructor

  //Input onChange method

  onNumberInputChange = event => {
    // prevent the number from doing what it normally does, because wants to handle the logic manually
    // event.target.preventDefault();

    // event.target.value simply means the new number that has been typed into the box
    const newNumber = event.target.value;
    const divisible_by_two = (newNumber % 2 === 0);
    const divisible_by_three = (newNumber % 3 === 0);
    const divisible_by_four = (newNumber % 4 === 0);
    const divisible_by_five = (newNumber % 5 === 0);
    const divisible_by_six = (newNumber % 6 === 0);
    const divisible_by_seven = (newNumber % 7 === 0);
    const divisible_by_eight = (newNumber % 8 === 0);
    const divisible_by_nine = (newNumber % 9 === 0);
    const divisible_by_ten = (newNumber % 10 === 0);
    const divisible_by_eleven = (newNumber % 11 === 0);
    const divisible_by_twelve = (newNumber % 12 === 0);

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

        <h3>This number <span className={this.state.divisible_by_two ? "true-color" : "false-color"}>{this.state.divisible_by_two ? "is" : "is not"}</span> divisible by 2.</h3>


        <h3>This number <span className={this.state.divisible_by_three ? "true-color" : "false-color"}>{this.state.divisible_by_three ? "is" : "is not"}</span> divisible by 3.</h3>



        <h3>This number <span className={this.state.divisible_by_four ? "true-color" : "false-color"}>{this.state.divisible_by_four ? "is" : "is not"}</span> divisible by 4.</h3>


        <h3>This number <span className={this.state.divisible_by_five ? "true-color" : "false-color"}>{this.state.divisible_by_five ? "is" : "is not"}</span> divisible by 5.</h3>


        <h3>This number <span className={this.state.divisible_by_six ? "true-color" : "false-color"}>{this.state.divisible_by_six ? "is" : "is not"}</span> divisible by 6.</h3>


        <h3>This number <span className={this.state.divisible_by_seven ? "true-color" : "false-color"}>{this.state.divisible_by_seven ? "is" : "is not"}</span> divisible by 7.</h3>


        <h3>This number <span className={this.state.divisible_by_eight ? "true-color" : "false-color"}>{this.state.divisible_by_eight ? "is" : "is not"}</span> divisible by 8.</h3>


        <h3>This number <span className={this.state.divisible_by_nine ? "true-color" : "false-color"}>{this.state.divisible_by_nine ? "is" : "is not"}</span> divisible by 9.</h3>


        <h3>This number <span className={this.state.divisible_by_ten ? "true-color" : "false-color"}>{this.state.divisible_by_ten ? "is" : "is not"}</span> divisible by 10.</h3>


        <h3>This number <span className={this.state.divisible_by_eleven ? "true-color" : "false-color"}>{this.state.divisible_by_eleven ? "is" : "is not"}</span> divisible by 11.</h3>


        <h3>This number <span className={this.state.divisible_by_twelve ? "true-color" : "false-color"}>{this.state.divisible_by_twelve ? "is" : "is not"}</span> divisible by 12.</h3>

      </div>




    );
  } // end of render function
} //End of App Class Component

export default App;
