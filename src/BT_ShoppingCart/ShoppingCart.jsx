import React, { useState } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
// import React, {useState} from "react";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
function ShoppingCart() {
  //state quản lý sản phẩm đang được chọn để xem chi tiết
  const [selectedProduct, setSelectedProduct] = useState(null);
  //=============Lưu ý chọn component đặt state rất quan trọng
  //1 sự kiện ảnh hưởng nhiều component thì phải đặt state ở component cấp cao nhất
  //state quản lý trạng thái ẩn/ hiện của giỏ hàn cart
  const [isOpen, setIsOpen] = useState(false);
  //state quản lý các sản phẩm được thêm vào giỏ hàng
  const [carts, setCarts] = useState([]);

  const handleGetProduct = (product) => {
    //Giá trị product chỉ tồn tại trong hàm handleGetProduct
    //?: Làm thế nào để đưa giá trị product xuống component ProductDetails
    // console.log(product);
    setSelectedProduct(product);
  };
  const handleAddToCart = (product) => {
    //Kiểm tra xêm sp đã xuất hiện trong giỏ hàng chưa
    const index = carts.findIndex((item) => item.id === product.id);
    if (index === -1) {
      //Sản phẩm chưa tồn tại trong giỏ hàng => Thêm sẩn phẩm vào giỏ hàng và đặt số lượng là 1
      const newProduct = { ...product, quanity: 1 };
      setCarts([...carts, newProduct]);
    } else {
      //Đã tồn tại => Tăng số lượng của sản phẩm lên 1
      const newCarts = [...carts];
      newCarts[index].quanity += 1;
      setCarts(newCarts);
    }
  };
  //Hàm xóa sản phẩm khỏi cart
  const removeProductCart = (productId) => {
    // console.log(product.quanity);
    const newCarts = carts.filter((item) => item.id !== productId);
    setCarts(newCarts);
  };
  //sửa bài:
  // const handleDeleteProductFromCart = (productId) => {
  //   const newCarts = carts.filter((item) => item.id !== productId);
  //   setCarts(newCarts);
  // };

  //Hàm thêm bớt sản phẩm trong cart
  const handleUpDateQuantityProductCart = (productId, quanity) => {
    const newCarts = carts.map((item) => {
      if (item.id === productId) {
        return { ...item, quanity: item.quanity + quanity };
      } else {
        return item;
      }
    });
    setCarts(newCarts);
  };
  //Hàm tính số lượng tổng sản phẩm
  const totalItems = carts.reduce((total, item) => {
    return total + item.quanity;
  }, 0);
  //Vì biến này tính toán dựa vào data của 1 state nên không cần gọi state mới

  return (
    <div className="container">
      <h1 className="text-center">FPT Shop</h1>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-danger" onClick={() => setIsOpen(true)}>
          Cart
          {totalItems > 0 ? <span className="ms-2">({totalItems})</span> : null}
          {/* hoac la: {totalItems>0 &&<span>...</span>} */}
        </button>
        {/* Khi click vào btn cart=> open modal: true */}
      </div>
      <ProductList
        products={data}
        onSelectProduct={handleGetProduct}
        onAddToCart={handleAddToCart}
      />
      <ProductDetails product={selectedProduct} />
      <Cart
        onUpdateQuantity={handleUpDateQuantityProductCart}
        onRemoveProductCart={removeProductCart}
        carts={carts}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default ShoppingCart;
