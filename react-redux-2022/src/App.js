import React, { useState } from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";
import "./App.css";

// Provider

const reducer = (currentState, action) => {
  if (currentState === undefined) {
    return { number: 1 };
  }
  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.number++;
  }
  return newState;
};

const store = createStore(reducer);

const App = () => {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
};

const Left1 = () => {
  return (
    <div>
      <h2>Left1: </h2>
      <Left2></Left2>
    </div>
  );
};

const Left2 = () => {
  return (
    <div>
      <h2>Left2: </h2>
      <Left3></Left3>
    </div>
  );
};

const Left3 = () => {
  const number = useSelector((state) => state.number);
  return (
    <div>
      <h2>Left3: {number}</h2>
    </div>
  );
};

const Right1 = () => {
  return (
    <div>
      <h2>Right1</h2>
      <Right2></Right2>
    </div>
  );
};

const Right2 = () => {
  return (
    <div>
      <h2>Right2</h2>
      <Right3></Right3>
    </div>
  );
};

const Right3 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Right3</h2>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: "plus" });
        }}
      ></input>
    </div>
  );
};

export default App;
