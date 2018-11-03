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
        <button onClick={(event) => this.handleOnClick(event)}>
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

// // the dispatch function is available as an argument; everything we need into a single prop value
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };

// ES6 shorthand lets us pass in one value that will be read as the key and value
export default connect(state => ({ items: state.items }), { addItem })(App);

// OR

// // if no specified 2nd arg to connect, dispatch is auto injected as a prop in component
// export default connect(state => ({ items: state.items }))(App);
