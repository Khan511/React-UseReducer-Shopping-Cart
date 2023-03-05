const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "FETCH_DATA":
      return { ...state, items: action.data, loading: false };
    case "GET_TOTALS":
      let { total, amount } = state.items.reduce(
        (accumulator, curentItem) => {
          const { price, amount } = curentItem;
          const cost = price * amount;

          accumulator.total += cost;
          accumulator.amount += amount;

          return accumulator;
        },
        { total: 0, amount: 0 }
      );

      total = parseFloat(total.toFixed(2));
      return { ...state, total: total, amount: amount };

    case "CLEARALL":
      return { ...state, amount: 0, items: [] };

    case "REMOVE_ITEM":
      const updatedItems = state.items.filter(
        (item) => item.id !== action.id && item
      );

      return { ...state, items: updatedItems };

    case "TOGGLE_AMOUNT":
      let togleAmount = state.items
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === "INC") {
              return { ...item, amount: item.amount + 1 };
            }
            if (action.payload.type === "DEC") {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((item) => item.amount > 0);
      return { ...state, items: togleAmount };
    default:
      return state;
  }
};

export default reducer;
