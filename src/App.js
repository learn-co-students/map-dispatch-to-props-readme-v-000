import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem } from  './actions/items'

class App extends Component {
  handleOnClick(){
    this.props.addItem();
  }
  render() {
    return (
      <div className="App">
          <button onClick={this.handleOnClick.bind(this)}>Click</button>
          <p> {this.props.items.length}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {items: state.items}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addItem: addItem
  }, dispatch);
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App)

export default connectedComponent;
