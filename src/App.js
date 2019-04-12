import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem();
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

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   }
// }
// Just like with mapStateToProps() we added a prop that pointed to a value, here we add a prop addItem that points to the value, a function. By including the dispatch, we've bundled everything we need into a single prop value.

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps, { addItem })(App);
// export default connect(state => ({ items: state.items }), { addItem })(App);