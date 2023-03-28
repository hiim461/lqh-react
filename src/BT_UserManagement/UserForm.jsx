import React, { useState, useEffect } from "react";

function UserForm({ onSubmit, user, onReset }) {
  //state quản lý giá trị của các input trong form
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  //Hàm setup của useEffect sẽ được chạy ở sau lần render đầu tiên và sau mỗi lần render tiếp theo nếu giá trị của props user bị thay đổi
  //Cứ giá trị user thay đổi thì chạy hàm bên dưới
  useEffect(() => {
    //Dùng giá trị mới của props user để cập nhật state cho state values
    setValues(user);
  }, [user]);

  const handleChange = (evt) => {
    // console.log(evt.target.value);
    //Để xử lý vấn đề 1 hàm có thể áp dụng cho nhiều ô input: obj Literal => Dynamic Key

    const { value, name } = evt.target; //Bóc tách 2 thuộc tính tuộc evt.target

    setValues({ ...values, [name]: value });
    //[name]: value : dynamic key: vì thế bắt buộc phải đặt key name === thuộc tính state values
    //[name]: value: lấy value ô input đang nhập làm giá trị cho key có tên là biến name => name = [firstName, lastName, email, address]
  };

  const handleSubmit = (evt) => {
    //Chặn hành vi submit mặc định của form (ngăn chặn reload lại page của mình khi nhấn submit)
    evt.preventDefault();

    //Tạo obj user từ giá trị của các input
    // const user = { ...values, id: Math.floor(Math.random() * 100) };

    //Gọi props onSubmit và truyền vào obj values, vầ tham số để xác định xem là cần thêm mới hay cập nhật
    // onSubmit(values, values.id ? "update" : "create");
    onSubmit(values);

    //Gọi hàm handleResetForm để set giá trị trên các input về rỗng
    handleResetForm();
  };

  const handleResetForm = () => {
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
    });
    onReset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          name="firstName"
          value={values.firstName}
          type="text"
          className="form-control"
          onChange={handleChange}
        />
        {/* value ={values.firstName} : ép value hiển thị trong ô input là firstName luôn, Khi reload lại thì ô input vẫn giữ nguyên giá trị đã nhập vào input trước khi reload */}
        {/* để quản lý ô input => sinh ra thuộc tính name vào ô input = với giá trị thuộc tính bên trong state values */}
      </div>

      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          value={values.lastName}
          name="lastName"
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          name="email"
          value={values.email}
          type="email"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          name="address"
          value={values.address}
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-success">
        Submit
      </button>
      <button
        onClick={handleResetForm}
        type="button"
        className="ms-1 btn btn-secondary"
      >
        Reset
      </button>
    </form>
  );
}

export default UserForm;
