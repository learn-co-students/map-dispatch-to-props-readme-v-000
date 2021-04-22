export default function shoppingListItemReducer(state = {
  items: []
}, action) {
  console.log(action)
  switch(action.type) {

    case 'INCREASE_COUNT':
      console.log(state.items.concat(state.items.length));
      return Object.assign({}, {
        items: state.items.concat(state.items.length)
      });
    case 'DECREASE_COUNT':
      return { items: state.items.slice(0, state.items.length - 2)}

    default:
      console.log(state)
      return state;
  }
};
