import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';
 
class App extends Component {
 
  handleOnClick = event => {
    this.props.addItem()
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
 
const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  };
};
 
// export default connect(mapStateToProps, mapDispatchToProps)(App);

// We could go further and get rid of mapStateToProps() as well, and handle it all in one line:

// export default connect(state => ({ items: state.items }), { addItem })(App);

// This means that if we were to simply write:

// export default connect(state => ({ items: state.items }))(App);

// ...we would still have this.props.dispatch() available to us in App. If you would rather write this.props.dispatch({ type: 'INCREASE_COUNT' }) in App, or pass dispatch down to children, you can!