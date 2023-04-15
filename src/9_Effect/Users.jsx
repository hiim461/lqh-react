import React, { useState, useEffect } from "react";
import axios from "axios";
//Để call API cần dùng đến 2 hook: useState và useEffect

//Demo thao tác call API
function Users() {
  //state quản lý giá trị trả về từ API
  const [users, setUsers] = useState([]);

  //Hàm dùng để call API
  const fetchUsers = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
      });
      //Call API  thành công, set state cho users bằng data trả về từ API
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  };

  //useEffect với tham số thứ 2 là 1 array rỗng
  //Dùng để thực hiện thao tác call API

  //Sau khi component hiển thị, hàm setup của useEffect sẽ được tự động gọi tới, bên trong hàm setup ta gọi tới hàm fetchUsers để call API và set state
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Users;
