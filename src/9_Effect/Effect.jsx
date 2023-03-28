import React, { useEffect, useState } from "react";
import Child from "./Child";
import Users from "./Users";

//useEffect (setup, deps)
// -setup: hàm callback function
// -deps: luôn luôn  là 1 mảng array chứa các giá trị state bị thay đổi (để chạy lại hàm useEffect)

function Effect() {
  const [count, setCount] = useState(0);
  // TH1: useEffect với tham số thứ 2 là 1 array rỗng:
  // - Chạy hàm setup 1 lần duy nhất sau lần render đầu tiên
  // - Thường dùng để call API, tương tác với DOM(nghĩa là chắc chắn render cụm return bên dưới rồi thì ta mới DOM được-hehehe)
  //   useEffect(() => {
  //     console.log("effect run");
  //   }, []);

  // TH2: useEffect với tham số thứ 2 là 1 array có các giá trị:
  // - Chạy hàm setup ở lần render đầu tiên
  // - Ở những lần render tiếp theo, hàm setup sẽ được chạy nếu các giá trị (giá trị của các state) bên trong array ở tham số thứ 2 bị thay đổi
  useEffect(() => {
    console.log("effect run");
  }, [count]);

  console.log("render run");
  return (
    <div className="container mt-5">
      <h1>Effect</h1>

      <p>Count: {count}</p>
      <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
        Click
      </button>

      {/* <Child count={count} /> */}
      <hr />
      {count <=5 && <Child count={count} />}
      {/* Conditional rendering */}
      <hr />
      <Users />
    </div>
  );
}

export default Effect;
