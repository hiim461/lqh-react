import React, { useReducer, useEffect } from "react";
import axios from "axios";
//vd1
// function reducer(state, action) {
//   switch (action.type) {
//     case "increase":
//       return state + 1;
//       break;
//     case "decrease":
//       return state - 1;
//       break;
//     default:
//       return state;
//       break;
//   }
// }
function reducer(state, action) {
  //action la 1 obj
  switch (action.type) {
    case "GET_PHOTOS_PENDING":
      return { ...state, isLoading: true };
      break;
    case "GET_PHOTOS_FULFILLED":
      return { ...state, isLoading: false, data: action.payload };
      break;
    case "GET_PHOTOS_REJECTED":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

function UseReducer() {
  //Dùng để quản lý state
  //vd1
  // const [state, dispatch] = useReducer(reducer, 0);
  //vd2
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    isLoading: false,
    error: null,
  });

  // useEffect(() => {
  //   dispatch({ type: "GET_PHOTOS_PENDING" });
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/photos")
  //     .then((response) => {
  //       //Call API thành công, dispatch action vào reducer
  //       //action là 1 obj, có key bắt buộc là type
  //       dispatch({
  //         type: "GET_PHOTOS_FULFILLED",
  //         payload: response.data,
  //       });
  //     })
  //     .catch((error) => {
  //       dispatch({
  //         type: "GET_PHOTOS_REJECTED",
  //         payload: error.response.data,
  //       });
  //     });
  // }, []);

  useEffect(() => {
    dispatch({ type: "GET_PHOTOS_PENDING" });
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        // Call API thành công, dispatch action vào reducer
        // action là một object, có key bắt buộc là type
        // type là 1 key (property) của action
        dispatch({ type: "GET_PHOTOS_FULFILLED", payload: response.data }); //response.data: format của axios
      })
      .catch((error) => {
        // Call API thất bại
        dispatch({ type: "GET_PHOTOS_REJECTED", payload: error.response.data }); //error.response.data: format của axios, obj nay la property của action
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">Reducer</h1>
      {/* vd1 */}
      {/* <p>State: {state}</p>
      <button
        className="btn btn-success"
        onClick={() => dispatch({ type: "increase" })}
      >
        Increase
      </button>
      <button
        className="btn btn-warning ms-1"
        onClick={() => dispatch({ type: "decrease" })}
      >
        Decrease
      </button> */}
      {/* vd2 */}
      {state.isLoading && <h1>Loading...</h1>}
      {state.error && <h1>{state.error}</h1>}
      {state.data.length > 0 &&
        state.data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
    </div>
  );
}

export default UseReducer;

//useState vs useRef:

//Điểm chung: cùng dùng để lưu trữ dữ liệu của component không bị reset dữ liệu khi component re-render

// Điểm riêng: useState làm component re-render khi thay đổi giá trị
// useRef không làm component re-render khi thay đổi giá trị
