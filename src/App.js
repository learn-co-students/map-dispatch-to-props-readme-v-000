import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    //this.props.store.dispatch(addItem());
    this.props.addItem()
  }

  render() {
    //debugger
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

// written to accept the Redux store's state as an argument and returns an object created using all or some of that state
// Key/value pairs in this returned object will become values we can access in the component we've wrapped with connect()
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// Code change: this new function takes in dispatch as an argument
// It then returns an object that contains a function as a value!
// Notice above in handleOnClick() that this function, addItem(),
// is what is called, NOT the addItem action creator itself.
/*const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  };
};*/

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, { addItem })(App);
