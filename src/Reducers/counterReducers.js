export const INCREASE = 'increase';
export const DECREASE = 'decrease';
export const HANDLE_USER_CHANGE = 'handleUserChange';
export const HANDLE_PRODUCT_CHANGE = 'handleProductChange';
export const HANDLE_QUANTITY_CHANGE = 'handleQuantityChange';
export const RESET = 'reset';

export const initialState = { count: 0, user: 'No user selected' };

const handleUserChange = (user, state) => {
  if(user === 'user1'){
    return {...state, user: user, product: 'productA'};
  } else if(user === 'user2'){
    return {...state, user: user, product: 'productB'};
  } else if(user === 'user3'){
    return {...state, user: user, product: 'productC'};
  }
}

const handleProductChange = (product, state) => {
  if(product === 'productA'){
    return {...state, product: product, quantity: 1};
  } else if(product === 'productB'){
    return {...state, product: product, quantity: 2};
  } else if(product === 'productC'){
    return {...state, product: product, quantity: 3};
  }
}

const handleQuantityChange = (quantity, state) => {
    return {...state, quantity: quantity};
}

export const counterReducer = (state, {type, payload}) => {
  switch (type) {
    case INCREASE:
      return { ...state, count : state.count + 1 };
    case DECREASE:
      return { ...state, count : state.count - 1 };
    case HANDLE_USER_CHANGE:
      return handleUserChange(payload, state);
    case HANDLE_PRODUCT_CHANGE:
      return handleProductChange(payload, state);
    case HANDLE_QUANTITY_CHANGE:
      return handleQuantityChange(payload, state);
    case RESET:
      return { count : 0, user: '', product: '', quantity: 0 };
    default:
      return state;
  }
}
