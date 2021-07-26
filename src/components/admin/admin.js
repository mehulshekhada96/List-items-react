import React from "react";
import { useState, useEffect } from "react";
// import { $ }  from 'react-jquery-plugin';
import UserArray from "./UserArray";
import './admin.css'
function Admin() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((response) => response.json())
      .then((users) => {
        // console.log(1, users.users);
        setUsers(users.users);
      })
      .catch((err) => console.log(err));
  }, []);

  const tableRows = users.map((user, i) => {
    return (
      <UserArray
        key={users[i].email}
        name={users[i].name}
        phoneNumber={user.phoneNumber}
        email={users[i].email}
        role={users[i].role}
      />
    );
  });

  return (
    <>
      <table className="table table-primary" id="userTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>{tableRows}</tbody>
      </table>
    </>
  );
}

export default Admin;
