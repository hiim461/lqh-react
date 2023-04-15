import { configureStore } from "@reduxjs/toolkit";
// import countReducer from "./reducers/countReducer";
import countReducer from "./slices/countSlice";
import todoReducer from "./reducers/todoReducer";
import bauCuaReducer from "./reducers/bauCuaReducer";
import userReducer from "./reducers/userReducer";

//Hàm reducer: nhận vào 2 tham số: giá trị hiện tại của state và action là 1 obj có key bắt buộc là type. Return về giá trị state mới, (state, action) => newState
// -Khi hàm reducer chạy lần đầu tiên lúc khởi tạo store, giá trị của state sẽ là undefined,bắt buộc ta phải tạo giá trị mặc định cho state bằng default params
// - Thông thường state sẽ là một object/array, ta không được thay đổi trực tiếp giá trị của state mà phải tạo ra một object/array mới để thay đổi và return về object/array mới đó.
// function countReducer(state = { count: 0 }, action) {
//   //dùng default params để gán giá trị mặc định cho state
//   //   console.log("reducer:", state, action);

//   switch (action.type) {
//     case "increment":
//       return { ...state, count: state.count + 1 };
//     case "decrement":
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
//   return state;
// }

// function todoReducer(state = { todos: [] }, action) {
//   switch (action.type) {
//     case "todo/add_todo":
//       return { ...state, todos: [...state.todos, action.payload] };
//     case "todo/del_todo":
//       return {
//         ...state,
//         todos: state.todos.filter((item) => item.id !== action.payload),
//       };
//     case "todo/update_todo": {
//       const newTodos = state.todos.map((todo) => {
//         if (todo.id === action.payload) {
//           return { ...todo, isCompleted: !todo.isCompleted };
//         }
//         return todo;
//       });
//       return { ...state, todos: newTodos };
//     }
//     default:
//       return state;
//   }
// }

//====================Redux middleware=========================
// const loggerMiddleware = (store) => (next) => (action) => {
//   console.log("[loggerMiddleware]", action);

//   // setTimeout(() => {}, 2000);
//   next(action);
//   //Thao tác này để đưa action vào trong store trở lại
// };
// //===async middleware
// const asyncMiddleware = (store) => (next) => (action) => {
//   //Kiểm tra xem action có phải là 1 function hay không
//   if (typeof action === "function") {
//     return action(store.dispatch, store.getState);
//   }

//   //action là 1 object bình thường thì:
//   next(action);
// };

//Tạo redux store lưu trữ state của ứng dụng
const store = configureStore({
  reducer: {
    countReducer: countReducer,
    todoReducer,
    bauCuaReducer,
    userReducer,
  },
  //Mặc định configureStore đã hỗ trợ một vài middleware trong đó cói redux-thunk
  //redux-thunk: mặc định redux chỉ nhận action là 1 plain object là middleware cho phép viết action là 1 function nhận vào 2 tham số là dispatch và getState cho phép ta viết async logic
  // middleware: [loggerMiddleware, asyncMiddleware],
});

//store.subscribe(): Hàm theo dõi sự thay đổi state của store; bất cứ khi nào state thay đổi, nó sẽ gọi tới hàm callback

//===============Giải thích các hàm của redux ================
// store.subscribe(() => {
//   //store.getState(): Hàm dùng để lấy re state hiện tại của state
//   //   console.log("Giá trị state của store:", store.getState());
// });

// //store.dispath(action)
// //Cách duy nhất để cập nhật state trong store là dùng hàm dispath để gửi 1 action
// //action là 1 plain object, có 1 key bắt buộc là type dùng để mô tả ta muốn thay đổi state như thế nào
// store.dispatch({ type: "increment" }); // {count: 1}
// store.dispatch({ type: "increment" }); // {count: 2}
// store.dispatch({ type: "decrement" }); // {count: 1}
export default store;

// function fetchData(userId) {
//   return (dispatch, getState) => {
//     //Xử lý call API
//     setTimeout(() => {
//       dispatch({ type: "GET_DATA_SUCCESS", payload: "OK" });
//     }, 5000);
//   };
// }

// store.dispatch(fetchData("userId"));
