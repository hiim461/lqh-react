import React from "react";

function List() {
  const templates = [<p>User A</p>, <p>User B</p>, <p>User C</p>];

  const products = [
    { id: 1, name: "Iphone" },
    { id: 2, name: "Samsung" },
    { id: 3, name: "Oppo" },
  ];

  //Dùng hàm map để biến đổi array các object thành array các phần tử JSX
  const listProducts = products.map((item) => {
    return <li key={item.id}>{item.name}</li>;
    //Với mỗi phần tử trong danh sách , ta cần cung cấp thuộc tính key các giá trị không bị trùng lặp, thông thường ta sẽ dùng id của dữ liệu để làm key
    //Khi tạo 1 bảng những phần tử JSX  bắt buộc phải cung cấp 1 giá trị key độc lập với nhau!!!
  });

  const students = [
    { id: "0001", name: "Nhí" },
    { id: "0002", name: "Anh" },
    { id: "0003", name: "Xíu" },
  ];

  return (
    <div>
      <h1>List</h1>
      {/* {templates} */}

      <ul>{listProducts}</ul>

      {/* Ta có thể viết trực tiếp map bên trong JSX */}
      <ul>
        {students.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>

      {/* Ngoài ra có thể sử dụng tính chât return của arrow function để viết ngắn gọn hơn */}
      <ul>
        {students.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
