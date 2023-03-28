import React from "react";

function UserList({ users, onDeleteUser, onSelectUser }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <button className="btn btn-warning" onClick={()=> {onSelectUser(user)}}>Edit</button>
                <button
                  className="ms-1 btn btn-danger"
                  onClick={() => {
                    onDeleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default UserList;
