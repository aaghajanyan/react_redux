import React, {memo, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {CounterAction} from "../actions/counterAction";

const Counter = (props) => {
  const dispatch = useDispatch();

  const counter = useSelector(store => store.counter)

  useEffect(() => {
    console.log("111111111 useEffect")
  })

  return (
    <div style={{backgroundColor: 'red', padding: '30px'}}>
      <h1> Counter is: {counter.value}</h1>
      <button onClick={() => dispatch(CounterAction.incressNumber(counter.value))}> Incress </button>
      <button onClick={() => dispatch(CounterAction.decressNumber(counter.value))}> Decress </button>
    </div>
  );
};

export { Counter };
