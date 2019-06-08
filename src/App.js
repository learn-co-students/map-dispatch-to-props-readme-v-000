import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = event => {
    this.props.addItem();
  }

  render() {
    debugger
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

//const mapStateToProps = (state) => {      can get rid of mapStateToProps & mapDispatchToProps & let
 // return {                                      redux handle it all within the default stmt below.
 //   items: state.items                      It works bc we're passing in an object instead of a function
//  };                                            See Readme for more detail
//};

//const mapDispatchToProps = dispatch => {
//  return {
//    addItem: () => {
 //     dispatch(addItem())
//    }
 // }
//}

//export default connect(mapStateToProps, mapDispatchToProps)(App);

export default connect(state => ({ items: state.items }), { addItem })(App)

//can also remove the {addItem} from the export default & it will still make this.props.dispatch available
//to us. It can look as follows & still work:
//export default connect(state => ({ items: state.items }))(App)

//it seems clearer to completely write it out so you can see exactly what it's doing