import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = event => {
    this.props.addItem()
  }

  render() {
    debugger
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

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };


/* ES6 shorthand lets us pass in *one* value that will be read as the key and value */
// By default mapDispatchToProps is just dispatch => ({ dispatch }). So if you
// don't specify the second argument to connect(), you'll get dispatch injected as
// a prop in your component.
export default connect(state => ({ items: state.items }))(App);
