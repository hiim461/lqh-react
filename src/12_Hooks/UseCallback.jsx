import React, { useCallback, useState, memo } from "react";

const Child = memo(function ChildComponent() {
  console.log("Child render");
  return <h1>Child</h1>;
});

function UseCallback() {
  const [count, setCount] = useState(0);
  //   const handleSubmit = () => {
  //    console.log("Submit");
  //   };

  const handleSubmit = useCallback(() => {
    console.log("Submit");
  },[]);
  return (
    <div>
      <h1>UseCallback</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
      <hr />
      <Child onSubmit={handleSubmit} />
    </div>
  );
}

export default UseCallback;
