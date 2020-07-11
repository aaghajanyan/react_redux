import React, { useState } from 'react';
import './App.scss';
import { Counter } from './components/Counter';
import { useSelector } from "react-redux";

function App() {

  const counter = useSelector(store => store.counter)

  const [count, setCount] = useState(counter);

  return (
    <div className="App">
        <Counter />
    </div>
  );
}

export default App;
