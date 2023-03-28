import React from "react";
//Props được truyền từ các property của component cha qua, ở dạng project
//function Welcome(props) {
// console.log(props);
// return <h3>Hello {props.name} - {props.email}</h3>;
//   }
function Welcome({ name="unknown", email="unknown" }) {//default props, khai báo giá trị mặc định cho prop nếu ở component cha k khai báo giá trị cho các props
  return (
    <h3>
      Hello {name} - {email}
    </h3>
  );
}

export default Welcome;
