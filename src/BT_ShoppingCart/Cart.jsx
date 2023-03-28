import React from "react";

function Cart({
  isOpen,
  onClose,
  carts,
  onRemoveProductCart,
  onUpdateQuantity,
}) {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      {/* thẻ rỗng <> </> cho phép wrap( vì khi return chỉ được trả về 1 thể đóng duy nhất vì thế nếu có 2 thẻ div trở lên đồng cấp thì cần dùng đến thẻ rỗng bọc lại) */}
      <div
        style={{ display: "block" }}
        className="modal fade show"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cart</h5>
              <button onClick={onClose} className="btn-close" />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>
                          <img
                            src={item.image}
                            alt={item.name}
                            width="70px"
                            height="70px"
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-outline-dark mx-1"
                            onClick={() => {
                              onUpdateQuantity(item.id, -1);
                            }}
                            disabled={item.quanity===1}
                          >
                            -
                          </button>
                          <span>{item.quanity}</span>
                          <button
                            className="btn btn-outline-dark mx-1"
                            onClick={() => {
                              onUpdateQuantity(item.id, +1);
                            }}
                          >
                            +
                          </button>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.quanity * item.price}</td>
                        <td>
                          <button
                            onClick={() => {
                              onRemoveProductCart(item.id);
                            }}
                            className="btn btn-danger"
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button onClick={onClose} className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}

export default Cart;
