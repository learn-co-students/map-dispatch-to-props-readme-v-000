import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  // Note : Requires "store" as part of the component
  // handleOnClick() {
  //   this.props.store.dispatch(addItem());
  // }

  // Note : Removing "store" from the component
  handleOnClick = event => {
    this.props.addItem()
  }

  render() {
    debugger;
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

// Note : Used to remove "store" dispatch action from component and use the specific dispatch function as a prop
const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  };
};

// Note : Just uses mapStateToProps
// export default connect(mapStateToProps)(App);

// Note : Adds mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);

// Note : It is possible to pass in an object instead of the function "mapDispatchToProps" (and even the "mapDispatchToProps" function)
  // export default connect(mapStateToProps, { addItem })(App); /* ES6 shorthand lets us pass in *one* value that will be read as the key and value */
  // export default connect(state => ({ items: state.items }), { addItem })(App);

// Note : The above is possible because the default Connect behavior automatically includes dispatch as a prop (this.props.dispatch()