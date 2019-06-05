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

export default connect(state => ({ items: state.items }), { addItem })(App);

// Can eliminate this by using ({ items: state.items }) in connect above.
// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// Can eliminate this by using { addItem } in connect above.
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// }

// This is before change to arguments in connect.
// export default connect(mapStateToProps, mapDispatchToProps)(App);
