import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CounterAction from "../actions/counterAction";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(store => store.counter)

  return (
    <div style={{backgroundColor: 'red', padding: '30px'}}>
      <h1> Counter is: {counter.value}</h1>
      <button type='button' onClick={() => dispatch(CounterAction.incressNumber(counter.value))}> Incress </button>
      <button type='button' onClick={() => dispatch(CounterAction.decressNumber(counter.value))}> Decress </button>
    </div>
  );
};

export default Counter;