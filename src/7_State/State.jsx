//NOTE: Chương trình trên lớp sẽ tập trung học state bằng function component (Hiện đang được sử dụng nhiều), Các bạn có thể xem thêm cách sử dụng state bằng class component trong phần xem video xem thêm

import React, { useState } from "react";

//useState là một hook của React dùng để tạo ra và quản lý state trong function component
//Các đặc tính của state:
// -Khi giá trị của state bị thay đổi, component sẽ được chạy lại(re-render).
// -Giá trị của state sẽ được giữ nguyên ở các lần re-render

function State() {
  // useState nhận vào 1 tham số là giá trị khởi tạo và trả về 1 array gòm 2 phần tử:
  // Phần tử 1: Giá trị của state
  // Phần tử 2: Hàm dùng để thay đổi giá trị của state
  // Lưu ý: không được thay đổi trực tiếp giá trị của state, mà phải thông qua hàm setter
  const [count, setCount] = useState(100);

  //   let isLoggedIn = true; //Cách này biến có thay đổi khi click nhưng chưa dom nên k thay đổi giá trị render. Dùng như bên dưới

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //Ví dụ biến phía trc là var thì hàm phía sau là setVar

  const [colors, setColors] = useState(["red", "green", "blue"]);
  const handleAddColor = () => {
    const color = prompt("Input your color:"); //yellow
    //Làm sao để thêm color vừa nhập vào danh sách colors
    // setColors(color); //["red", "green", "blue"] =>"yellow"
    //Ouput: ["red", "green", "blue", "yellow"]

    //Bởi vì không được thay đổi trực tiếp state mà phải thông qua setter nên ta không thể dùng colors.push(color)
    //Sử dụng spread operator để sao chép những giá trị hiện có của state và thêm một phần tử mới vào
    // => Luôn tạo ra 1 array mới và thay đổi trên nó, sau đó đưa array mới này vào hàm setter
    setColors([...colors, color]);
  };
  const handleRemoveColor = () => {
    const color = prompt("Input your color:");
    const newColors = colors.filter((item) => item != color);
    setColors(newColors);
  };

  return (
    <div>
      <h1>State</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <hr />

      {isLoggedIn ? (
        <div>
          <h1>Welcome Back!!!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Login!!!</h1>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </div>
      )}
      <hr />

      <p>Color: {colors.join(", ")}</p>
      <button onClick={handleAddColor}>Add color</button>
      <button onClick={handleRemoveColor}>Remove color</button>
      {/* .join(""): biến mnagr thành chuỗi */}
    </div>
  );
}

export default State;
