import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = event => {
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

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// see *was below,this goes with the old pre-es6 way
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };


export default connect(mapStateToProps, {addItem})(App);
// *was:
// export default connect(mapStateToProps, mapDispatchToProps)(App);
// could go as far as:
// export default connect(state => ({ items: state.items }), { addItem })(App);
// By default mapDispatchToProps is just dispatch => ({ dispatch }). So if you don't specify the second argument to connect(), you'll get dispatch injected as a prop in your component.
