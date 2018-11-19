import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() = event => {
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

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {dispatch(addItem())};
//   };
// };

// these ALL work, depending on whether you have the functions written out or not

// export default connect(mapStateToProps, { addItem })(App);
// export default connect(state => ({ items: state.items }), { addItem })(App);
export default connect(state => ({ items: state.items }))(App);