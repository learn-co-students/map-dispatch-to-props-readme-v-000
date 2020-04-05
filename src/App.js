import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addItem } from "./actions/items";
import "./App.css";

class App extends Component {
  handleOnClick() {
    this.props.addItem();
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addItem }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
