import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "../student.css";
import { Button, ButtonGroup } from "react-bootstrap";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CreateComponent from "./CreateComponent";

export default class BankAccounta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
  //get all student details
  async componentDidMount() {
    await axios.get("http://localhost:8080/api/banks").then((response) => {
      this.setState({ students: response.data });
      console.log(response.data);
    });
  }

  //when click delete button
  onDelete = (id) => {
    //send url to user_route.js
    axios.delete("http://localhost:8080/api/students/delete/" + id);
  };

  render() {
    return (
      <div>
        <h1 className="text-center "> Bank Management System</h1>
        <CreateComponent />
        <table className="table table-striped tabl">
          <thead className="thead-dark head">
            <tr>
              <td>Bank ID</td>
              <td>Bank Name</td>
              <td>View Accounts</td>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>

                <ButtonGroup>
                  <Link to={"/edit/" + student.id} className="btn btn-primary">
                    <FontAwesomeIcon icon={faEdit} />
                  </Link>
                </ButtonGroup>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
