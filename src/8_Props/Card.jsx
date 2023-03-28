import React from "react";

function Card({ image, children }) {
  //bắt buộc phải khai báo prop children nếu muốn lồng nhau, bắt buộc phải khai báo prop children
  return (
    <div className="card">
      {image && <img src={image} alt="img" />}
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
