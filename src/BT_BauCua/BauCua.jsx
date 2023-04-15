import React from "react";
import BanChoi from "./BanChoi";
import XucXac from "./XucXac";
import { useSelector } from "react-redux";

function BauCua() {
  const { tongDiemCuoc } = useSelector((state) => state.bauCuaReducer);
  return (
    <div style={{ minHeight: "100vh" }} className="container-fluid bg-dark">
      <h1 className="text-center text-danger display-4">Bầu Cua</h1>
      {/* Hiển thị điểm cược */}
      <div className="row">
        <div className="col-12 text-center">
          <div className="text-center mt-2">
            <span
              className="p-3 bg-warning"
              style={{
                fontSize: 25,
                borderRadius: 10,
                border: "5px solid rgb(0, 0, 0)",
              }}
            >
              Tiền thưởng:
              <span className="text-success">{tongDiemCuoc} $</span>
            </span>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        {/* Hiển thị bàn chơi */}
        <div className="col-md-8">
          <BanChoi />
        </div>
        <div className="col-md-4">
          <XucXac />
        </div>
      </div>
    </div>
  );
}

export default BauCua;
