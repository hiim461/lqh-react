import React from "react";

function Product({ name, price, onAddToCart }) {
  //Có 2 cách để chạy hàm onAddToCart có truyền tham số vào (cách đã bôi đen và cách bên dưới)

  //   const handleAddToCart = () => {
  //   const product = { name, price }; tạo
  // const { name, price } = product : nhận
  //     onAddToCart({ name, price });
  //   };
  return (
    <h3>
      {name} - {price}$ -{" "}
      {/* <button
        onClick={handleAddToCart}
        className="btn btn-primary"
      >
        Add To Cart
      </button> */}
      <button
        onClick={() => onAddToCart({ name, price })}
        className="btn btn-primary"
      >
        Add To Cart
      </button>
    </h3>
  );
}

export default Product;
