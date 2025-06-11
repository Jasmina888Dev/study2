const initialState = {
  cash: 0,
  dark: true,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MONEY":
      return { ...state, cash: state.cash + Number(action.payload) };
    case "TAKE_MONEY":
      return { ...state, cash: state.cash > 0 ? state.cash - 100 : 0 };
    case "LIGHT":
      return { ...state, dark: (state.dark = false) };
    case "MOON":
      return { ...state, dark: (state.dark = true) };
    default:
      return state;
  }
};
