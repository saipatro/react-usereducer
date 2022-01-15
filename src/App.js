import React, { useReducer } from 'react';
import './App.css';

function App() {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase':
        return { count : state.count + 1};
      case 'decrease':
        return {count : state.count - 1};
      case 'reset':
        return {count : 0};
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <div>Count : {state.count}</div>
      <div style={{display: 'flex'}}>
        <span><button onClick={() => dispatch({type: 'increase'})}>Increment Number</button></span>
        <span><button onClick={() => dispatch({type: 'decrease'})}>Decrement Number</button></span>
        <span><button onClick={() => dispatch({type: 'reset'})}>Reset</button></span>
      </div>
    </div>
  );
}

export default App;
