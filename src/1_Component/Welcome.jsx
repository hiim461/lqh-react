// Component bản chất là 1 function return về 1 JSX mô tả giao diện sẽ được hiển thị
// JSX: Javascript + XML, cho phép viết HTML trong Javascript
//Vì JSX bản chất là javascript nên có 1 số cú pháp trong HTML bị thay đổi ví du:
// - class => className
// - for => htmlFor
// - Các thuộc tính ở dạng snake-case sẽ được chuyển thành camelCase
//    + tab-index: tabIndex

import "./welcome.css";
//Chủ yếu được viết bằng function như dưới
function Welcome() {
  return (
    <div className="title">
      <h1>Hello Reactjs(Component)</h1>
    </div>
  );
}

//Ngoài ra ta có thể tạo component bằng class, tuy nhiên hiện nay cách này khá ít được sử dụng

// import React from "react";
// class Welcome extends React.Component {
//     render(){
//         return(
//             <div>
//                 <h1>Hello Reactjs (class component)</h1>
//             </div>
//         )
//     }
// }

// Lưu ý đối với 1 component thì tên component phải viết hoa chữ cái đầu tiên
export default Welcome;
