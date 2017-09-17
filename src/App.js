import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items'
import { bindActionCreators } from 'redux'

class App extends Component {
  handleOnClick(){
    this.props.addItem()
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

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App);)(App)

function mapStateToProps(state){
  return {items: state.items}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addItem: addItem
  }, dispatch)
};
 


export default connectedComponent;
