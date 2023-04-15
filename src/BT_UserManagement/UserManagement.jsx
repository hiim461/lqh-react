import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import axios from "axios";
import Search from "./Search";

function UserManagement() {
  //state quản lý danh sách người dùng
  //Đối với state, không được thay đổi giá trị của state mà phải thông qua hàm setter của state
  const [users, setUsers] = useState([]);
  //state quản lý người dùng đang được chọn để edit
  const [selectedUser, setSelectedUser] = useState({});
  //state quản ly giá trị tìm kiếm
  const [searchByEmail, setSearchByEmail] = useState("");

  //Viết hàm call API để lấy danh sách users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://63e86415ac3920ad5beb7b08.mockapi.io/api/users", {
          params: {
            email: searchByEmail || undefined,
          }
        }
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Viết hàm xử lý nhận vào obj user, thêm vào state users
  // const handleSubmit = (user, type) => {
  //   if (type === "create") {
  //     const id = Math.floor(Math.random() * 100);
  //     setUsers([...users, { ...user, id }]);
  //   } else if (type === "update") {
  //     const newUsers = users.map((item) => {
  //       if (item.id === user.id) {
  //         return user;
  //       }
  //       return item;
  //     });
  //     setUsers(newUsers);
  //   }
  // };

  // Viết hàm xử lý nhận vào object user và thêm hoặc cập nhật user
  const handleSubmit = async (user) => {
    const { id, ...payLoad } = user;
    try {
      if (id) {
        //Cập nhật
        await axios.put(
          `https://63e86415ac3920ad5beb7b08.mockapi.io/api/users/${id}`,
          payLoad
        );
      } else {
        //Thêm mới
        await axios.post(
          `https://63e86415ac3920ad5beb7b08.mockapi.io/api/users`,
          payLoad
        );
      }
      //Gọi hàm fetchUsers sau kkhi call API create/update
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  //Viết hàm xử lý nhận vào userId, xoá user có id bằng userId khỏi state users
  // const handleDeleteUser = (userId) => {
  //   const newUsers = users.filter((user) => user.id !== userId);
  //   setUsers(newUsers);
  // };
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(
        `https://63e86415ac3920ad5beb7b08.mockapi.io/api/users/${userId}`
      );
      //Sau khi xóa thành công, dữ liệu chỉ mới thay đổi ở phía server
      // Cần gọi lại hàm fetchUsers để gọi API lấy danh sách users mới nhất và set lại cho state users
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };
  //Viết hàm xử lý nhận vào obj user
  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  //Viết hàm xử lý nhận vào giá trị searchString
  const handleSearch = (searchString) => {
    setSearchByEmail(searchString);
    // ?: Khi state searchByEmail thay đổi, ta muốn gọi lại hàm fetchUser => đưa state searchByEmail vào làm tham số bên trong useEffect bên dưới
  };

  useEffect(() => {
    fetchUsers();
  }, [searchByEmail]);

  return (
    <div className="container-fluid">
      <h1 className="text-center text-primary">User Management</h1>

      <div className="card">
        <div className="card-header bg-dark text-white">User Form</div>
        <div className="card-body">
          <UserForm
            // key={selectedUser.id}
            onReset={() => {
              setSelectedUser({});
            }}
            user={selectedUser}
            onSubmit={handleSubmit}
          />
          {/* đặc tính của key component: khi gọi lại thì nó sẽ xóa component có key này vào tạo lại 1 component mới  (chạy lại component từ đầu) */}
        </div>
      </div>
      <div className="mt-4">
        <Search onSearch={handleSearch} />
      </div>

      <div className="mt-4">
        <UserList
          onSelectUser={handleSelectUser}
          onDeleteUser={handleDeleteUser}
          users={users}
        />
      </div>
    </div>
  );
}

export default UserManagement;
