import React from "react";

function Header() {
  //Lưu ý dùng inline-style trong 2 cặp ngoăc nhọn
  return (
    <div
      style={{ height: "200px" }}
      className="bg-primary text-white d-flex justify-content-center align-items-center"
    >
      <p>Header</p>
    </div>
  );
}

export default Header;
