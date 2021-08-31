import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import "../student.css";
import { Button, Modal, InputGroup, Form, Alert } from "react-bootstrap";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class CreateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: "",
      name: "",
    };
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeName(e) {
    console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  }
  onChangeId(e) {
    this.setState({
      id: e.target.value,
    });
    console.log(this.state.id);
  }

  //when clicking add button
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      id: this.state.id,
      name: this.state.name,
    };

    axios.post("http://localhost:8080/api/bank/add", obj);

    this.setState({
      id: "",
      name: "",
    });

    this.setState({ show: false });
    window.location.reload(false);
  }
  //modal popup
  handleModal() {
    this.setState({ show: true });
  }
  cutModal() {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        <Button
          onClick={() => this.handleModal()}
          size="sm"
          variant="outline-primary"
          className="add"
        >
          <FontAwesomeIcon icon={faSave} /> Add Bank
        </Button>

        <Modal
          show={show}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            <Modal.Title id="example-custom-modal-styling-title">
              ADD BANK
            </Modal.Title>
            <AiOutlineClose className="cut" onClick={() => this.cutModal()} />
          </Modal.Header>
          <Form id="FormId">
            <Modal.Body>
              <h6>Bank Id</h6>
              <InputGroup className="mb-3">
                <Form.Control
                  required
                  className="input-color-popup"
                  type="text"
                  name="id"
                  placeholder="Bank Id"
                  value={this.state.id}
                  onChange={this.onChangeId}
                />
              </InputGroup>
              <h6>Bank Name</h6>
              <InputGroup className="mb-3">
                <Form.Control
                  required
                  className="input-color-popup"
                  type="text"
                  name="name"
                  placeholder="Bank name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button
                size="sm"
                onClick={this.onSubmit}
                variant="outline-primary"
                color="primary"
              >
                ADD
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}
