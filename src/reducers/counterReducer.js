const initialState = {
  value: 0
};

  export default function(state = initialState, action) {
    switch (action.type) {
      case "INCRESS_NUMBER":
        return {
          ...state,
          value: ++action.payload
        };
      case "DECRESS_NUMBER":
        return {
          ...state,
          value: --action.payload
        };
      default:
        return state;
    }
  }
