export default function shoppingListItemReducer(state = {
  items: []
}, action) {
  console.log(action)
  console.log(state)
  switch(action.type) {

    case 'INCREASE_COUNT':
      console.log(state.items.concat(state.items.length));
      debugger;
      return Object.assign({}, {
        items: state.items.concat(state.items.length)
  
      });

    default:
      console.log(state)
      return state;
  }
};
