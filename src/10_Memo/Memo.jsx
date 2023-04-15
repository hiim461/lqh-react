import React, { useState } from "react";
import Child from "./Child";

function Memo() {
  //Memoization: ghi nhớ
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleAddNumber = () => {
    const number = Math.floor(Math.random() * 100);
    setNumbers([...numbers, number]);
  };

  return (
    <div className="container">
      <h1 className="text-center">Memo</h1>
      <p>Count: {count}</p>
      <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
        Click
      </button>
      <hr />
      <p>Message: {message}</p>
      <button className="btn btn-danger" onClick={() => setMessage("Hello")}>
        Set Message
      </button>
      <hr />
      <p>Numbers: {numbers.join(", ")}</p>
      <button className="btn btn-dark" onClick={handleAddNumber}>
        Add Number
      </button>
      <hr />
      <Child message={message} onAddNumber={handleAddNumber} />
      {/* memo so sánh kiểu === vì vậy nếu truyền props là 1 hàm xuống component thì nó sẽ không giá trị */}
    </div>
  );
}

export default Memo;
