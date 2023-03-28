import React from "react";

function ProductItem({ product, onSelectProduct, onAddToCart }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" height="350"/>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        {/* Xem chi tiet */}
        <button onClick={() => {onSelectProduct(product)}} className="btn btn-success">Show Details</button>
        {/* Them gio hang */}
        <button onClick={() => {onAddToCart(product)}} className="btn btn-warning mx-1">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductItem;
