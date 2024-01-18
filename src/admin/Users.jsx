import React from "react";
import { Container, Row, Col } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

const Users = () => {
  const { data: usersData, loading } = useGetData("products");

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    toast.success("User Deleted !");
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="fw-bold">Users</h4>
          </Col>
          <Col lg="12" className="pt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>
                    <img src="../assets/images/andrew.jpg"/>
                  </td>
                  <td>Andrew Tate</td>
                  <td>Andrew@gmail.com</td>
                </tr>

              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Users;
