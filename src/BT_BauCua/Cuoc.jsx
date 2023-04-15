import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tangCuocAction, giamCuocAction } from "../reducers/bauCuaReducer";

function Cuoc({ item }) {
  const imgSrc = `./img/${item.ma}.png`;
  const dispatch = useDispatch();
  const { tongDiemCuoc } = useSelector((state) => state.bauCuaReducer);

  const tangCuoc = () => {
    //Truyền action type và mã con vật bạn muốn tăng cược
    // dispatch({ type: "bauCua/tang_cuoc", payload: item.ma });
    dispatch(tangCuocAction(item.ma));
  };
  const giamCuoc = () => {
    // dispatch({ type: "bauCua/giam_cuoc", payload: item.ma });
    dispatch(giamCuocAction(item.ma));
  };
  return (
    <div className="text-center mt-4">
      <img src={imgSrc} alt="./img/gameBauCua/cua.png" style={{ width: 250 }} />
      <br />
      <br />
      <span
        className="p-3 pl-5 pr-5 bg-warning mt-2"
        style={{ borderRadius: "5%", fontSize: 25 }}
      >
        <button
          className="btn btn-success ml-2 mr-2"
          style={{ fontSize: 19 }}
          onClick={tangCuoc}
          disabled={tongDiemCuoc === 0}
        >
          +
        </button>
        <span className="text-success px-2">{item.diemCuoc}</span>
        <button
          className="btn btn-success ml-2 mr-2"
          style={{ fontSize: 19 }}
          onClick={giamCuoc}
          disabled={item.diemCuoc === 0}
        >
          -
        </button>
      </span>
    </div>
  );
}

export default Cuoc;
