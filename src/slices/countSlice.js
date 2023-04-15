import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  //định danh slice (tag name ở đầu)
  name: "count",
  //Khai báo giá trị khởi tạo của state
  initialState: {
    count: 0,
  },
  reducer: {
    //Kết hợp giữa action creator và reducer
    increment: (state, action) => {
      return { ...state, count: state.count + 1 };
    },
    decrement: (state, action) => {
      return { ...state, count: state.count - 1 };
    },
  },
});

//export actions
export const { increment, decrement } = countSlice.actions;

//export reducer
export default countSlice.reducer;
