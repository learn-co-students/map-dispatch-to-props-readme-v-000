import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';
 
class App extends Component {
 
  handleOnClick = event => {
    this.props.addItem() // Code change: this.props.dispatch.store is no longer being called
  }
 
  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

//Code change: this is the refactored concise version
//the 1st argument for connect has to be a function so we pass in an annonymous function
//with state parameter and return object with items key and state.items for the value
//the second argument for connect can accept a function OR an object
//so we pass in { addItem } which is syntactic sugar for { addItem: addItem }
export default connect(state => ({ items: state.items }), { addItem })(App);


// Code change: this version uses separate mapStateToProps function instead of annonymous function
// We are still passing in an object for 2nd argument so no mapDispatchToProps function required!

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// export default connect(mapStateToProps, { addItem })(App); 
 
// // Code change: this version has mapDispatchToProps passed in for the 2nd argument for connect
// // this new function takes in dispatch as an argument
// // It then returns an object that contains a function as a value
// // Notice above in handleOnClick() that this function, addItem(),
// // is what is called, NOT the addItem action creator itself.
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };
 
// export default connect(mapStateToProps, mapDispatchToProps)(App);