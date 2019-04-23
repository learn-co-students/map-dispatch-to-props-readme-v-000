import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    // Replace the call to this.props.store.dispatch(addItem())
    // with a call to this.props.addItem() by supplying a 2nd
    // argument to connect() below. The 2nd item is an object
    // containing addItem (which we imported above). connect()
    // will automatically wrap addItem in a call to dispatch,
    // e.g. dispatch(addItem())

    // Anyway, once that's done, we can remove the store attribute
    // from <App store={store} /> in index.js

    // This is the old line:
    // this.props.store.dispatch(addItem());

    // And this is the new line:
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

export default connect(mapStateToProps, { addItem })(App);
