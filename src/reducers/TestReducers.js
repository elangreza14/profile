export const TestReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const item = action.addItem;
      item.qty = 1;
      const search = state.findIndex((x) => x === action.addItem);
      return search < 0 ? [...state, item] : state;
    case "REMOVE_ITEM":
      return state.filter((x) => x.id !== action.decItem);
    case "ADD_QTY":
      return state.map((x) =>
        x.id === action.addstuff ? { ...x, qty: x.qty + 1 } : x
      );
    case "REMOVE_QTY":
      return state.map((x) =>
        x.id === action.decstuff ? { ...x, qty: x.qty - 1 } : x
      );
    case "MODIFY_ITEM":
      return { count: state.count - 1 };
    case "RESET":
      return [];
    default:
      return state;
  }
};
