import React, { useRef, useEffect, useState } from "react";

function Ref() {
  //Tác dụng 1: dùng để DOM tới 1 element

  //Dùng để truy cập DOM vào 1 thẻ bất kì mà không cần đến ID
  const inputRef = useRef();
  const sectionARef = useRef();
  const sectionBRef = useRef();
  //Nhưng muốn dùng useRef phải có hook useEffect
  //Vì từ đầu inputRef: undefined => chạy xuống vẫn log ra undefined nên muốn chạy vào khi render giao diên phải đặt trong useEffect

  //Tác dụng 2: Lưu trữ dữ liệu (data) mà khi dữ liệu thay đổi, ta không cần component kích hoạt re-render lại => debounce
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  const timeoutRef = useRef();

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (evt) => {
    setSearchTerm(evt.target.value);

    clearTimeout(timeoutRef.current);
    //này có nghĩa là nếu trong 300ms sau lần input change cuối mà có change tiếp thì sẽ clear setimeout (300ms)=> không log cái phía dưới, nếu sau 300ms vẫn chưa change thì log ra màn hình kết quả mới nhất - hehehehe

    timeoutRef.current = setTimeout(() => {
      console.log(evt.target.value);
    }, 300);

    ///logic call API
    // const timer = setTimeout(() => {
    //   console.log(evt.target.value);
    // }, 300);
    // clearTimeout(timer);
  };
  useEffect(() => {
    console.log(inputRef);
    console.log(inputRef.current);
    // inputRef.current.focus();
    //Những việc useState và useEffect không thể thực hiện được mới dùng đến useRef, ví dụ như hàm trên
  }, []);
  return (
    <div>
      <h1>Ref</h1>
      <hr />
      <input
        value={searchTerm}
        ref={inputRef}
        type="text"
        className="form-control w-25"
        placeholder="User name"
        onChange={handleSearch}
      />{" "}
      <hr />
      <button className="btn btn-danger" onClick={() => countRef.current++}>
        Count Ref: {countRef.current}
      </button>
      <button className="btn btn-dark ms-1" onClick={() => setCount(count + 1)}>
        Count State: {count}
      </button>
      <hr />
      <button
        onClick={() => sectionARef.current.scrollIntoView()}
        className="btn btn-warning"
      >
        Section A
      </button>
      <button
        onClick={() => sectionBRef.current.scrollIntoView()}
        className="btn btn-success ms-1"
      >
        Section B
      </button>
      <section
        ref={sectionARef}
        style={{
          height: "500px",
          backgroundColor: "yellow",
          marginTop: "20px",
        }}
      >
        Section A
      </section>
      <section
        ref={sectionBRef}
        style={{ height: "500px", backgroundColor: "green" }}
      >
        Section B
      </section>
    </div>
  );
}

export default Ref;
