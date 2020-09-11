export const TestReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const item = action.addItem;
      item.qty = 1;
      const search = state.findIndex((x) => x === action.addItem);
      return search < 0 ? [...state, item] : state;
    case "REMOVE_ITEM":
      return state.filter((x) => x !== action.decItem);
    case "ADD_QTY":
      const find = state.findIndex((x) => x === action.addstuff);
      state[find].qty += 1;
      console.log(state);
      return state;
    case "REMOVE_QTY":
      return { count: state.count - 1 };
    case "MODIFY_ITEM":
      return { count: state.count - 1 };
    case "RESET":
      return [];
    default:
      return state;
  }
};
