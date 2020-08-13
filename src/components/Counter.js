import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {CounterAction} from "../actions/counterAction";
import { withRouter } from "react-router-dom";
import { withFirebase } from "../firebase";
import { compose } from "redux";
import {useTranslation} from 'react-i18next';

const Counter = (props) => {
  const dispatch = useDispatch();
  const counter = useSelector(store => store.counter)

  const {t} = useTranslation();


  return (
    <div style={{backgroundColor: 'red', padding: '30px'}}>
      <h1> Counter is: {counter.value}</h1>
      <button onClick={() => dispatch(CounterAction.incressNumber(counter.value))}> Incress </button>
      <button onClick={() => dispatch(CounterAction.decressNumber(counter.value))}> Decress </button>
      <button > {t('Login')} </button>
    </div>
  );
};

export default compose(
  withRouter,
  withFirebase,
)(Counter);
