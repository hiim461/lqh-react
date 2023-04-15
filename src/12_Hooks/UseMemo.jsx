import React, { useMemo, useState } from "react";

function UseMemo() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Learn Js",
      isCompleted: true,
    },
  ]);
  const [count, setCount] = useState(0);
  //todos.filter luôn luôn chạy khi component re-render, dù giá trị của state todos không đổi
  //   const completedTodos = todos.filter((item) => item.isCompleted)

  //useMemo nhận vào 2 tham số:
  //callback function: Hàm để tính toán và return về 1 giá trị
  //dependencies: mảng phụ thuộc để useMemo quyết định sẽ chạy lại callback để tính toán giá trị mới hay dùng giá trị đã được ghi nhớ ở lần trước để sử dụng
  //Lưu ý: Chỉ sử dụng useMemo đối với những xử lý tốn nhiều thời gian, hoặc tài nguyên của máy tính
  const completedTodos = useMemo(() => {
    console.log("useMemo run");
    return todos.filter((item) => item.isCompleted);
  }, [todos]);
  return (
    <div>
      <h1>UseMemo</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <button
        onClick={() =>
          setTodos([...todos, { id: 3, title: "Learn CSS", isCompleted: true }])
        }
      >
        Add todo
      </button>
      <ul>
        {completedTodos.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseMemo;
