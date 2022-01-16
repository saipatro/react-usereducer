import React from 'react'
import { useCounterState } from './Context/counterContext'
import { INCREASE, DECREASE, RESET, HANDLE_PRODUCT_CHANGE, HANDLE_QUANTITY_CHANGE, HANDLE_USER_CHANGE } from './Reducers/counterReducers'

const Dropdown = (props) => {
    const [state, dispatch] = useCounterState();
    return (
      <>
        <div>Count : {state.count}</div>
        <div>User : {state.user}</div>
        <div>Product : {state.product}</div>
        <div>Quantity : {state.quantity}</div>
        <span><button onClick={() => dispatch({type: INCREASE})}>Increment Number</button></span>
        <span><button onClick={() => dispatch({type: DECREASE})}>Decrement Number</button></span>
        <span><button onClick={() => dispatch({type: RESET})}>Reset</button></span>
        <span>
          <select onChange={(e) => dispatch({type: HANDLE_USER_CHANGE, payload: e.target.value})} value={state.user}>
            <option value="No user selected">Select an User</option>
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
            <option value="user3">User 3</option>
          </select>
          <select onChange={(e) => dispatch({type: HANDLE_PRODUCT_CHANGE, payload: e.target.value})} value={state.product}>
            <option value="select">Select an Item</option>
            <option value="productA">Product A</option>
            <option value="productB">Product B</option>
            <option value="productC">Product C</option>
          </select>
          <select onChange={(e) => dispatch({type: HANDLE_QUANTITY_CHANGE, payload: e.target.value})} value={state.quantity}>
            <option value="select">Select a Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </span>
      </>
    )
}

export default Dropdown;
