//============Action types=========
//Thường sẽ tách ra làm 1 file riêng để định nghĩa action type . VD: baucuaConstants.js
const TANG_CUOC = "bauCua/tang_cuoc";
const GIAM_CUOC = "bauCua/giam_cuoc";
const BAT_DAU = "bauCua/bat_dau";

//============Actions creator=======
//Thường sẽ tách ra làm 1 file riêng để định nghĩa actions creator . VD: baucuaActions.js
export const tangCuocAction = (ma) => {
  return { type: TANG_CUOC, payload: ma };
};
export const giamCuocAction = (ma) => {
  return { type: GIAM_CUOC, payload: ma };
};
export const batDauAction = () => {
  return { type: BAT_DAU };
};

//===============Reducer==========
//Setup state cho bài tập bầu cua

const initialState = {
  tongDiemCuoc: 1000,
  danhSachCuoc: [
    { ma: "bau", diemCuoc: 0 },
    { ma: "cua", diemCuoc: 0 },
    { ma: "tom", diemCuoc: 0 },
    { ma: "ca", diemCuoc: 0 },
    { ma: "nai", diemCuoc: 0 },
    { ma: "ga", diemCuoc: 0 },
  ],
  xucXac: ["bau", "bau", "bau"],
};

const Mang_Xuc_Xac = ["bau", "cua", "tom", "ca", "ga", "nai"];

function bauCuaReducer(state = initialState, action) {
  switch (action.type) {
    case TANG_CUOC: {
      const danhSachCuoc = state.danhSachCuoc.map((item) => {
        if (item.ma === action.payload) {
          return { ...item, diemCuoc: item.diemCuoc + 10 };
        }
        return item;
      });
      const tongDiemCuoc = state.tongDiemCuoc - 10;
      return { ...state, danhSachCuoc, tongDiemCuoc };
    }
    case GIAM_CUOC: {
      const danhSachCuoc = state.danhSachCuoc.map((item) => {
        if (item.ma === action.payload) {
          return { ...item, diemCuoc: item.diemCuoc - 10 };
        }
        return item;
      });
      const tongDiemCuoc = state.tongDiemCuoc + 10;
      return { ...state, danhSachCuoc, tongDiemCuoc };
    }
    case BAT_DAU: {
      //B1: random ra 3 xúc xắc mới
      const xucXac = state.xucXac.map(() => {
        //random 0-5: Math.random() * (max-min+1) + min // này áp dụng cho nằm giữa khoảng
        const index = Math.floor(Math.random() * 6);
        return Mang_Xuc_Xac[index];
      });
      //B2: tính toán tiền thắng cược
      //Lọc ra danh sách đặt cược
      let tongDiemCuoc = state.tongDiemCuoc;
      const danhSachDatCuoc = state.danhSachCuoc.filter(
        (item) => item.diemCuoc > 0
      );
      //B2.1: Hoàn trả tiền cược
      danhSachDatCuoc.forEach((item) => {
        //Kiểm tra nếu xúc xắc có khớp cới item đã đặt cược hay không
        //Nếu có hoàn lại tiền cược
        if (xucXac.includes(item.ma)) {
          tongDiemCuoc += item.diemCuoc;
        }
      });
      //B2.2: hoàn trả tiền thắng
      xucXac.forEach((x) => {
        const cuoc = danhSachDatCuoc.find((item) => item.ma === x);
        if (cuoc) {
          tongDiemCuoc += cuoc.diemCuoc;
        }
      });

      //B3: reset lại toàn bộ điểm cược
      const danhSachCuoc = state.danhSachCuoc.map((item) => {
        return { ...item, diemCuoc: 0 };
      });

      return { ...state, xucXac, tongDiemCuoc, danhSachCuoc };
    }
    default:
      return state;
  }
}

export default bauCuaReducer;
