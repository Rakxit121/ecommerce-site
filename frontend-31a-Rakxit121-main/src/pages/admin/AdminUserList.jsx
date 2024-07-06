import React from "react";
import { Button, Table } from "react-bootstrap";

const AdminUserList = () => {
  return (
    <>
      <h1>Users</h1>
      <Table bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>
              <a href="mailto:john@example.com">john@example.com</a>
            </td>
            <td>
              <i className="fas fa-check" style={{ color: "green" }}></i>
            </td>
            {/* Edit button */}
            <td>
              <Button variant="light" className="btn-sm">
                <i className="fas fa-edit"></i>
              </Button>
            </td>
            {/* Delete button */}
            <td>
              <Button variant="danger" className="btn-sm">
                <i className="fas fa-trash"></i>
              </Button>
            </td>
          </tr>
          {/* More user rows go here */}
        </tbody>
      </Table>
    </>
  );
};

export default AdminUserList;
