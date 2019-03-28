import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { addItem } from  './actions/items'

class App extends Component {

  handleOnClick = event => {
    // this.props.store.dispatch(addItem())
    this.props.addItem()
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     items: state.items
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   }
// }

// There is an even simpler way to approach bundling actions and dispatch into props. 
// The second argument of connect will accept a function or an object. 
// If we pass in a function, mapDispatchToProps(), we must incorporate dispatch. If we 
// pass in an object, connect handles this for us! mapStateToProps can be replace as well.

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default connect(state => ({ items: state.items }), {addItem})(App)
/* ES6 shorthand lets us pass in *one* value that will be read as the key and value */
