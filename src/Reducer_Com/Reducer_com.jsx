import React, { useReducer } from "react";
import "./Reducer_com.css";
const Reducer_com = () => {
  const initialCount = 0;

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload };
      case "decrement":
        return { count: state.count - action.payload };
      default:
        return state;
    }
  };

  const initialArg= {
    count:5
  }

const init = (initialArg) => {
  return initialArg;
};

  const [state, dispatch] = useReducer(reducer, initialArg, init);

  return (
    <div className="d_flex">
      <div className="container">
        <h2>Count: {state.count}</h2>
        <div className="button_section">
          <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
            +
          </button>
          <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reducer_com;
