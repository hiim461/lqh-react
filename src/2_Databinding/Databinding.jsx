import React from "react";

function Databinding() {
  let msg = "Hello BC42";
  let imgUrl = "https://picsum.photos/200/300";
  let user = {
    name: "Alice",
    email: "alice@gmail.com",
  };
  return (
    <div>
      <h1>{msg}</h1>
      <img src={imgUrl} alt="ramdomPic" />
      <p>{user.name}</p>
      <input value={user.email} />
    </div>
  );
  //Thay vì ${variable} như trong JS bây h trong JSX chỉ cần {variable}
}

export default Databinding;
