import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = event => {
    this.props.addItem()
    // this.props.store.dispatch(addItem()); is no longer being called.
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




export default connect(mapStateToProps, {addItem})(App);

// Aside: We could go further and get rid of mapStateToProps() as well. We still need to pass 
// in a function as the first argument, but it can be an anonymous arrow function that handles 
// everything in one line:

// export default connect(state => ({ items: state.items }), { addItem })(App);