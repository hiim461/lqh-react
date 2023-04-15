import React, { useEffect, useState } from "react";

function Child({ count }) {
  const [total, setTotal] = useState(0);
// Dùng useEffect để đọc giá trị mới nhất của props hoặc state
useEffect(() => {
    // Dùng giá trị mới nhất của prop count để thực hiện một hành động nào đó

    // Ví dụ: Ta có một state total, ta muốn mỗi khi prop count thay đổi, dùng giá trị của prop count để tính toán giá trị của state total
    setTotal(total + count);
  }, [count]);

  // Trong hàm setup của useEffect nếu có return về một function, thì nó được gọi là cleanup effect
  useEffect(() => {
    // effect
    console.log("Child component mounted");

    const handler = () => console.log("Mouse move");
    document.addEventListener("mousemove", handler); //sự kiện này sẽ vần chạy khi component bị hủy bỏ

    // cleanup effect: sẽ được chạy trước khi component bị huỷ bỏ
    return () => {
      console.log("Child component unmounted");

      //Dùng để dừng các tác vụ đã sử dụng phía trên k dùng sử dụng nưã với conditional rendering

      // Một trong những trường hợp cần sử dụng cleanup effect là remove event listener khi component bị huỷ bỏ
      //Hủy sự kiện mousemove khi tắt component này
      document.removeEventListener("mousemove", handler);
    };
  }, []);
  return (
    <div>
      <h1>Child</h1>
      <p>Total: {total}</p>
    </div>
  );
}

export default Child;
