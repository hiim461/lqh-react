import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { batDauAction } from "../reducers/bauCuaReducer";

function XucXac() {
  const { xucXac, daDatCuoc } = useSelector((state) => {
    const xucXac = state.bauCuaReducer.xucXac;
    const daDatCuoc = state.bauCuaReducer.danhSachCuoc.some((item) => {
      //duyệt qua tất cả các phần tử diemCuoc của danhSachCuoc
      //chỉ cần 1 cái trả về true, nó sẽ trả về true
      return item.diemCuoc > 0;
    });
    return { xucXac, daDatCuoc };
  });
  const dispatch = useDispatch();

  return (
    <div className="d-flex h-100 justify-content-center flex-column align-items-center">
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@keyframes animBauCua1681006804215 { \n            0% {left: -50px}\n            25% {left: 50px}\n            50%{left: 0px}\n            75%{left: -50px}\n            100%{left: 50px}\n        }\n        .xucXac{\n            left: 0px;\n            position: relative;\n            animation: animBauCua1681006804215 1s;\n        }",
          }}
        />
        {xucXac.map((item, index) => {
          return (
            <div key={`${item}-${index}`} className={`mt-3 xucXac`}>
              <img src={`./img/${item}.png`} alt="" style={{ width: 50 }} />
            </div>
          );
        })}
        <button
          className="btn btn-success ps-5 pe-5 mt-5 pt-3 pb-3"
          style={{ fontSize: 25 }}
          disabled={!daDatCuoc}
          onClick={() => dispatch(batDauAction())}
        >
          Xốc
        </button>
        {/* <div className="mt-3 xucXac">
          <img src="./img/cua.png" style={{ width: 50 }} />
        </div>
        <div className="mt-3 xucXac">
          <img src="./img/nai.png" style={{ width: 50 }} />
        </div>
        <div className="mt-3 xucXac">
          <img src="./img/ga.png" style={{ width: 50 }} />
        </div>
        <button
          className="btn btn-success pl-3 pr-3 mt-3 pt-3 pb-3"
          style={{ fontSize: 22, width: 50, margin: 0, padding: 0 }}
        >
          Xốc
        </button> */}
      </div>
    </div>
  );
}

export default XucXac;
