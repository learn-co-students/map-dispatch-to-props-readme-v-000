import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    //this.props.store.dispatch(addItem()); changes to:
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

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

//TOGETHER//
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
//TOGETHER//

export default connect(mapStateToProps, { addItem })(App);
/*ES6 shorthand lets us pass in *one* value that will be read as the key and value.
The second argument of connect will accept a function (as we've seen) or an object. If we pass in a function, mapDispatchToProps(), we must incorporate dispatch. If we pass in an object, connect handles this for us!
*/

/* Can delete both maptoprops functions: export default connect(state => ({ items: state.items }), { addItem })(App);
*/
