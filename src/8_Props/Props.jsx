import React from "react";
import Button from "./Button";
import Card from "./Card";
import Product from "./Product";
import Welcome from "./Welcome";

// Property

function Props() {
  let user = {
    name: "Bob",
    email: "bob@gmail.com",
  };
  const handleClick = () => {
    alert("Clicked");
  };
  const handleAddToCart = (product) => {
    console.log(product);
  };
  return (
    <div>
      <h1>Props</h1>
      {/* truyền property cho component con */}
      <Welcome name="John" email="john@gmail.com" />
      <Welcome name="Alice" email="alice@gmail.com" />
      {/* props: nếu value là chuỗi thì để trong nháy đôi, nếu là biến or js thì phải đặt trong ngoặc nhọn */}
      <Welcome name={user.name} email={user.email} />
      <Welcome />
      <hr />
      <br />
      <br />
      <h2>Children</h2>
      {/* Children */}
      <Card>
        {/* Những nội dung j nằm giữa cặp thẻ đóng mở <Card> </Card> sẽ được hiển thị trong property children của thẻ con Card (nội dung nằm trong {children}) */}
        <h3>User</h3>
        <Welcome name="Alice" email="alice@gmail.com" />
      </Card>

      <hr />
      {/* <button onClick={handleClick}>Click</button> */}
      <Button onClick={handleClick}>Click</Button>
      <hr />

      <Product name="Iphone 14" price={1500} onAddToCart={handleAddToCart} />
      {/* Lưu ý chỉ có truyền chuỗi vào property mới xài "", còn các giá trị number, boolean, ... đều phải truyền vào bằng ngoặc nhọn {} */}
    </div>
  );
}

export default Props;
