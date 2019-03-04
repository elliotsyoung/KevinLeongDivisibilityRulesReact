import React, {
  Component
} from 'react';

import './App.css';

class App extends Component {

  // This is a function that only runs ONCE when the component
  // is loaded
  //The constructor is where we set up our state variables for the first time
  constructor() {
    super();
    let currentNumber = 356;
    const divisible_by_two = (currentNumber % 2 === 0);
    const divisible_by_three = (currentNumber % 3 === 0);
    const divisible_by_four = (currentNumber % 4 === 0);
    const divisible_by_five = (currentNumber % 5 === 0);
    const divisible_by_six = (currentNumber % 6 === 0);
    const divisible_by_seven = (currentNumber % 7 === 0);
    const divisible_by_eight = (currentNumber % 8 === 0);
    const divisible_by_nine = (currentNumber % 9 === 0);
    const divisible_by_ten = (currentNumber % 10 === 0);
    const divisible_by_eleven = (currentNumber % 11 === 0);
    const divisible_by_twelve = (currentNumber % 12 === 0);

    const digitsString = currentNumber.toString();

    let digits = digitsString.split("");

    digits = digits.map((number) => {
      return parseInt(number);
    })

    console.log(digits);


    // this.state is an object that keeps track of variables in our react app
    this.state = {
      digits,
      currentNumber,
      divisible_by_two,
      divisible_by_three,
      divisible_by_four,
      divisible_by_five,
      divisible_by_six,
      divisible_by_seven,
      divisible_by_eight,
      divisible_by_nine,
      divisible_by_ten,
      divisible_by_eleven,
      divisible_by_twelve,
    }
  } // end of constructor

  //Input onChange method

  onNumberInputChange = event => {
    // prevent the number from doing what it normally does, because wants to handle the logic manually
    // event.target.preventDefault();

    // event.target.value simply means the new number that has been typed into the box
    const currentNumber = event.target.value;
    const divisible_by_two = (currentNumber % 2 === 0);
    const divisible_by_three = (currentNumber % 3 === 0);
    const divisible_by_four = (currentNumber % 4 === 0);
    const divisible_by_five = (currentNumber % 5 === 0);
    const divisible_by_six = (currentNumber % 6 === 0);
    const divisible_by_seven = (currentNumber % 7 === 0);
    const divisible_by_eight = (currentNumber % 8 === 0);
    const divisible_by_nine = (currentNumber % 9 === 0);
    const divisible_by_ten = (currentNumber % 10 === 0);
    const divisible_by_eleven = (currentNumber % 11 === 0);
    const divisible_by_twelve = (currentNumber % 12 === 0);


    const digitsString = currentNumber.toString();

    let digits = digitsString.split("");

    digits = digits.map((number) => {
      return parseInt(number);
    })

    console.log(digits);

    this.setState({
      digits,
      currentNumber,
      divisible_by_two,
      divisible_by_three,
      divisible_by_four,
      divisible_by_five,
      divisible_by_six,
      divisible_by_seven,
      divisible_by_eight,
      divisible_by_nine,
      divisible_by_ten,
      divisible_by_eleven,
      divisible_by_twelve,
    });

  }



  render() {

    const lastDigit = this.state.digits[this.state.digits.length-1];

    const sumOfDigits = this.state.digits.reduce((num, acc) => {
      return num + acc;
    },0);

    return (
      <div className="App">
        <h1>Kevin's Divisibility Rules Checker</h1>
        <h2>The current number is <span className="current-number">{this.state.currentNumber}</span></h2>
        <label htmlFor="number-input"> Please input a number: <input value={this.state.currentNumber} onChange={this.onNumberInputChange} id="number-input" type="number"></input></label>


        <hr/>

        <h3>This number <span className={this.state.divisible_by_two ? "true-color" : "false-color"}>{this.state.divisible_by_two ? "is" : "is not"}</span> divisible by 2.</h3>

        <p>A number is divisible by two if it ends in an even number.</p>

        <p>The last digit in the number is {this.state.digits[this.state.digits.length-1]}</p>

        <p>{lastDigit} {lastDigit % 2 === 0 ? "is an even number." : "isn't an even number."}</p>

        <hr/>

        <h3>This number <span className={this.state.divisible_by_three ? "true-color" : "false-color"}>{this.state.divisible_by_three ? "is" : "is not"}</span> divisible by 3.</h3>

        <p>A number is divisible by three if the sum of the digits is divisible by 3.</p>

        <p>The sum of the digits in the number is {sumOfDigits}</p>

        <p>ADD LOGIC HERE KEVIN</p>

        <hr/>

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
