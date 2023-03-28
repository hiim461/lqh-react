//Lắng ghe sự kiên ( dom, click, ...)
import React from "react";

// html: <button onclick="handleClick()">Click</button>

function Event() {
  const handleClick = () => {
    //Lưu ý: Định  nghĩa các hàm xử lý sự kiện bên trong component
    //Hàm xử lý sự kiện click cho button
    alert("Clicked");
  };

  //Hàm xử lý sự kiện onChange cho input
  //Tất cả các sự kiện đều sẽ nhận được 1 đối tượng event
  //event.target: element gốc phát sinh ra sự kiện
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  //Hàm xử lý sự kiện click của button Get Message (Ví dụ về hàm có truyền tham số)
  const handleGetMessage = (message) => {
    alert(`Message: ${message}`);
  };

  //   const example = () => {
  //     return handleGetMessage("Hello Nhí");
  //   };
  return (
    <div>
      <h1>Event</h1>

      {/* onClick = {handleClick} không bao gồm cặp ngoặc tròn ở cuối */}
      {/* Không gọi hàm xử lý sự kiện, ta chỉ đưa nó vào trong onClick và React sẽ tự gọi đến hàm đó khi user click vào button */}
      <button onClick={handleClick}>Click me!</button>

      <hr />

      <input onChange={handleChange}></input>

      <hr />

      {/* <button onClick={example}></button> */}

      {/* Nếu hàm xử lý sự kiện cần nhận vào tham số, ta sẽ đưa vào onClick 1 hàm ẩn danh(thường viết bằng arrow function), Khi user click vào button, React sẽ gọi tới hàm ẩn danh này, và hàm ẩn danh này sẽ gọi tới hàm xử lý sự kiện và truyền vào tham số */}
      <button onClick={() => handleGetMessage("Hello Nhí")}>Búa đê!</button>
    </div>
  );
}

export default Event;
