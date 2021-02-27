export default {
  incressNumber: (number) => dispatch => dispatch({
    type: "INCRESS_NUMBER",
    payload: number
  }),

  decressNumber: (number) => dispatch => dispatch({
    type: "DECRESS_NUMBER",
    payload: number
  })
};


