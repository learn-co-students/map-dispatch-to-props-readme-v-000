import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  // Dispatches an action to the store
  handleOnClick() { 
    this.props.addItem()
  }

  render() {
    
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};



// add new props to our App component
// the first argument passed into connect() is a function.
export default connect(mapStateToProps, { addItem })(App);
