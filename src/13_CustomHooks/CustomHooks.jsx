import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";
import useWindowSize from "./useWindowSize";
import useRequest from "./useRequest";
import axios from "axios";

//Những hook mặc định chỉ được sử dụng bên trong function component
function CustomHooks() {
  const { count, increase, decrease } = useCounter();
  const size = useWindowSize();
  const [searchTerm, setSearchTerm] = useState("");
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        params: {
          userId: searchTerm || undefined,
        },
      }
    );
    return data;
  };

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  const {
    data: todos = [],
    isLoading,
    error,
  } = useRequest(fetchData, { dependencies: [searchTerm] });
  return (
    <div>
      <h1>CustomHooks</h1>
      <hr />
      <p>Count: {count}</p>
      <button onClick={increase}>Increaase</button>
      <button onClick={decrease}>Decreaase</button>
      <hr />
      {size.width >= 768 && <h1>Sidebar</h1>}
      <hr />
      <input placeholder="Search" onChange={handleChange}></input>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <ul>
        {todos.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default CustomHooks;

// function useSum() {
//     //Để tạo 1 custom hook, cần phải đặt tên có use đằng trước
// }
