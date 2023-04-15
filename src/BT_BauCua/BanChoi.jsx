import React from "react";
import { useSelector } from "react-redux";
import Cuoc from "./Cuoc";

function BanChoi() {
  const { danhSachCuoc } = useSelector((state) => state.bauCuaReducer);
  return (
    <div className="mb-3">
      <div className="row">
        {danhSachCuoc.map((item) => {
          return <div className="col-md-4">
            <Cuoc item={item}/>
          </div>;
        })}
      </div>
    </div>
  );
}

export default BanChoi;
