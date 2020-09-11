export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const found = state.findIndex(
        (x) => x[`${action.find}`] === action.id_base
      );
      return found === -1 ? [...state, action.addSub] : state;
    case "DEC":
      return state.filter((x) => x[`${action.find}`] !== action.idFilter);
    default:
      return state;
  }
};
