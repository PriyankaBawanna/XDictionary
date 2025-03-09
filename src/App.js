import CountriesSearch from "./CountriesSearch;";
import Weather from "./Weather";
import XDictionary from "./XDictionary";
import React, { Component } from 'react';
import "./App.css"

function App() {
  return (
  <>
<Counter/> 
  </>
  );
}

export default App;


class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with count set to 0
    this.state = {
      count: 0,
    };
  }

  // Increment method to increase the count
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  // Decrement method to decrease the count
  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1> {/* Display the count */}
        <div>Count: {this.state.count}</div>
        <br/>
        <button onClick={this.increment}>Increment</button>

        {/* Decrement button */}
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}


