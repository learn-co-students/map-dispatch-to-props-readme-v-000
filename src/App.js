import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem();
  }

  render() {
    debugger;
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
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
// Standard Approach  

// export default connect(state => ({ items: state.items }), { addItem })(App);
// Can even not use mapStateToProps
// if second argument addItem is passed in as object as it is, redux, connect handles this for us
// and is read as key and value

export default connect(state => ({ items: state.items }))(App);
// by default mapDispatchToProps is just dispatch => ({dispatch}), so if you don't specify the second argument
// to connect(), you'll get dispatch injected as a prop in your component. 
// i.e. the above export statement still permits this.props.dispatch()
