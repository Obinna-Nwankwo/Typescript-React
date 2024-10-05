import React from "react";
import { useReducer } from "react";

type CounterState = {
  count: number;
};

// type CounterAction = {
//     type: string;
//     payload: number;
// }

type UpdateCounter = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetCounter = {
  type: "reset";
};

type CounterAction = UpdateCounter | ResetCounter;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;

    default:
      return state;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count : {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}

export default Counter;
