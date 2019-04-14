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

//const mapDispatchToProps = dispatch => {
//  return {
//    addItem: () => {
//      dispatch(addItem())
//    }
//  }
//}

//export default connect(mapStateToProps, mapDispatchToProps)(App);
// or for short hand, pass the addItem object directly to connect()

//export default connect(mapStateToProps, { addItem} )(App)

// of for even simpler, drop the mapStateToProps() function

export default connect(state => ({items: state.items}), { addItem })(App)