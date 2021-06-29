const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const nr = action.payload;
      return state + nr;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
