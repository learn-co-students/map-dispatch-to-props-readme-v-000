import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
   this.props.addItem();
     // addItem() prop no longer directly points to the action creator,
     // but instead points to the dispatch function and passes through
     // the return value of the action creator as its argument
  }

  render() {
    // debugger
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

//mapStateToProps() function receives the state from the store as its argument
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

//mapDispatchToProps() receives the dispatch function from the store.
const mapDispatchToProps = (dispatch) => {
  // we use bindActionCreators() function from Redux to say what we would like to eventually dispatch
  return bindActionCreators({
    addItem: addItem
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
