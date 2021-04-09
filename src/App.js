import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    // this.props.store.dispatch(addItem());
		this.props.addItem()
  }

  render() {
		debugger
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

// START explicitly created map to props functions to be passed to connect
// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// const mapDispatchToProps = dispatch => {
// 	return { addItem: () => { dispatch(addItem()) }}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
// END explicitly created map to props functions to be passed to connect

// Alternative is to pass is the state as the first argument and the addItem object as the second argumenr
// connect will still have dispatch as a prop
export default connect(state => ({ items: state.items }), { addItem })(App);
