export const CounterAction = {


  incressNumber: (number) => {
    return dispatch => {
      return dispatch({
        type: "INCRESS_NUMBER",
        payload: number
      });
    };
  },

  decressNumber: (number) => {
    return dispatch => {
      return dispatch({
        type: "DECRESS_NUMBER",
        payload: number
      });
    };
  }
};


