import axios from "axios";

//-Action types:
const GET_USER_PENDING = "user/get_user_pending";
const GET_USER_FULFILLED = "user/get_user_fulfilled";
const GET_USER_REJECTED = "user/get_user_rejected";

// -Actions creator
export const getUserAction = (username) => {
  //return về 1 thunk function nhận vào 2 tham số dispatch và getState
  return async (dispatch, getState) => {
    try {
      //Trước khi call API dispatch action để set loading thành true
      dispatch({ type: GET_USER_PENDING });
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      // Call API thành công dispatch action đưa data từ API vào store
      dispatch({ type: GET_USER_FULFILLED, payload: response.data });
    } catch (error) {
      dispatch({
        type: GET_USER_REJECTED,
        payload: error.response.data.message,
      });
    }
  };
};

// - Reducer
const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_FULFILLED:
      return { ...state, isLoading: false, user: action.payload };
    case GET_USER_PENDING:
      return { ...state, isLoading: true, error: null };
    case GET_USER_REJECTED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

export default userReducer;
