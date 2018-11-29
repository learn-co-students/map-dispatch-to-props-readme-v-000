import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';
import { bindActionCreators } from 'redux';

class App extends Component {

  handleOnClick = event =>  {
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

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({
//     addItem: addItem
//   }, dispatch)
// };

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({addItem}
//     , dispatch
//     )
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     ...bindActionCreators({addItem})
//     , dispatch
//   };
// };


export default connect(
  mapStateToProps, 
  // mapDispatchToProps
  {addItem}
  )(App);
