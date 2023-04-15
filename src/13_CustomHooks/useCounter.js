import React, { useState } from "react";

function useCounter() {
  //Đây là 1 custom hook
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return { count, increase, decrease };
  //custom hook chúng ta sẽ return về obj, vì nó sẽ nhắc lệnh cho chúng ta dk
}

export default useCounter;
