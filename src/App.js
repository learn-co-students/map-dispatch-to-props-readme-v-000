import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem();
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

const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// alternatively, omit defining mapDispatchToProps and connect the action as an object:

// export default connect(mapStateToProps, { addItem })(App);
/* ES6 shorthand lets us pass in *one* value that will be read as the key and value */

// both mapStateToProps and mapDispatchToProps can be omited if state and action are directly references in connect():
// export default connect(state => ({ items: state.items }), { addItem })(App);

// props.dispatch() is available as default of connect(), so one can also write:
// export default connect(state => ({ items: state.items }))(App);
