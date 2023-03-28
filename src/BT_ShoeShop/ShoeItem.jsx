import React from "react";

function ShoeItem({ shoe }) {
  //Nhớ chỗ này phải đặt trong cặp ngoặc nhọn
  return (
    <div className="card">
      <img src={shoe.image} alt={shoe.name} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{shoe.name}</h3>
        <p className="card-text">{shoe.price}</p>
        <button className="btn btn-dark">Add To Cart</button>
      </div>
    </div>
  );
}

export default ShoeItem;
