//================= Hiển thị có điều kiện====================///////
import React from "react";

function ConditionalRendering() {
  // isLoggedIn thể hiện xem user đã đăng nhập hay chưa.
  let isLoggedIn = false;
  // content chưa JSX dựa vào điều kiện của biến isLoggedIn
  let content = null;

  let isActive = true;

  if (isLoggedIn) {
    content = <h1>Welcome to Cybersoft</h1>;
  } else {
    content = <h1>Login to Cybersoft</h1>;
  }

  return (
    <div>
      {content}
      {/* Nếu muốn hiển thị theo điều kiện bên trong JSX ta dùng toán tử bậc 3 */}
      {isActive ? <h3>Activated</h3> : <h3>Unactivated</h3>}
      {/* Trong trường hợp chỉ muốn kiểm tra điều kiện đúng để hiển thị, sai thì không hiển thị: */}
      {/* {isActive ? <h3>Activated</h3> : null}  */}
      {/* Hoặc là bên dưới, vì trong JSX thì các gtri falsyvalue trả về rỗng (Toán tử && lấy giá trị falsyvalue đầu tiên hoặc giá trị đúng cuối cùng) */}
      {isActive && <h3>Activated</h3>} 
    </div>
  );
}

export default ConditionalRendering;
