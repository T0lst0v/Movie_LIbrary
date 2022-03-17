const initialState = {
  isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_AUTH":
      return {
        ...state,
        isAuthenticated: action.payload != null,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
