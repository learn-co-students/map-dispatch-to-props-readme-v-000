import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

/*
handleOnClick(){
this.props.store.dispatch(addItem())
}
By default mapDispatchToProps is just dispatch => ({ dispatch }). So if you don't specify the second argument to connect(), you'll get dispatch injected as a prop in your component.
This means that if we were to simply write:

export default connect(state => ({ items: state.items }))(App);

...we would still have this.props.dispatch() available to us in App. If you would rather write this.props.dispatch({ type: 'INCREASE_COUNT' }) in App, or pass dispatch down to children, you can!

*/

/*
  handleOnClick = event => {
    this.props.addItem()
  }
*/

  handleOnClick() {
    this.props.addItem();
  }

  render() {
    return (
      <div className="App">
        {/*
          <button onClick={this.handleOnClick}>
        */}
        <button onClick={event => this.handleOnClick(event)}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  };
};

/*
export default connect(state => ({ items: state.items }))(App);

By default mapDispatchToProps is just dispatch => ({ dispatch }). So if you don't specify the second argument to connect(), you'll get dispatch injected as a prop in your component.

...we would still have this.props.dispatch() available to us in App. If you would rather write this.props.dispatch({ type: 'INCREASE_COUNT' }) in App, or pass dispatch down to children, you can!

*/

/*
export default connect(mapStateToProps, mapDispatchToProps)(App);
*/
/*
export default connect(mapStateToProps, { addItem })(App)
*/

export default connect(state => ({ items: state.items }), { addItem })(App);
