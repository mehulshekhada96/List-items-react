import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap'
import React, {  useState } from "react";

const UserArray = (props) => {
  const [userRole, setUserRole] = useState(props.role);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  function changeUserRole() {
    if (userRole === "admin") {
      setUserRole("user");
    } else if (userRole === "user") {
      setUserRole("admin");
    }
    axios
      .post(`http://localhost:5000/change-user-role/${props.email}`, {
        newRole: userRole === "admin" ? "user" : "admin",
      })
      .then((result) => console.log(result));
      setShow(false);
  }
  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.phoneNumber}</td>
        <td>{props.email}</td>
        <td className="edit-role edit-role{i}" onClick={handleShow}>
          {userRole}
        </td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Change User Role</Modal.Title>
          <i onClick={handleClose} class="far fa-times-circle cancle"></i>
        </Modal.Header>
        <Modal.Body>Are you sure to change <b> {props.name}'s </b> role to <b> {userRole === "admin" ? "user" : "admin"} </b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            I'm Not Sure
          </Button>
          <Button variant="primary" onClick={changeUserRole}>
            Change Role
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default UserArray;
