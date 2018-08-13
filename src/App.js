import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = event => {
    this.props.addItem();
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

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);

//entire mapDispatchToProps could be discarded if connect were:
//export default connect(mapStateToProps, { addItem })(App)
//
//and both could be discarded with:
//
//export default connect(state => ({items: state.items}), { addItem })(App)
//
//Also, dispatch is automatically passed if you do:
//
//export default connect(state => ({ items: state.items }))(App);
//
//and we would still have this.props.dispatch() available to us in App

