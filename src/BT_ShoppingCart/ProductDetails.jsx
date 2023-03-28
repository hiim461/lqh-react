import React from "react";

function ProductDetails({ product }) {
  if (!product) {
    //Conditional rendering
    return null;
  }
  return (
    <div className="mt-3 row">
      <div className="col-sm-4">
        <h3 className="text-center">{product.name}</h3>
        <img
          style={{ width: "100%", height: "350px" }}
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="col-sm-8">
        <h3>Thông số kỹ thuật</h3>
        <hr />
        <table className="table">
          <tbody>
            <tr>
              <td>Màn Hình</td>
              <td>{product.display}</td>
            </tr>
            <tr>
              <td>Hệ điều hành</td>
              <td>{product.os}</td>
            </tr>
            <tr>
              <td>Camera</td>
              <td>{product.camera}</td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>{product.ram}</td>
            </tr>
            <tr>
              <td>ROM</td>
              <td>{product.rom}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductDetails;
