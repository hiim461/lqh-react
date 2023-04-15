function countReducer(state = { count: 0 }, action) {
  //dùng default params để gán giá trị mặc định cho state
  //   console.log("reducer:", state, action);

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
  return state;
}
export default countReducer;
