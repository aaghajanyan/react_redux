const initialState = {
  value: 0
};

  export default (state = initialState, action) => {
    switch (action.type) {
      case "INCRESS_NUMBER":
        return {
          ...state,
          value: action.payload + 1
        };
      case "DECRESS_NUMBER":
        return {
          ...state,
          value: action.payload - 1
        };
      default:
        return state;
    }
  }
