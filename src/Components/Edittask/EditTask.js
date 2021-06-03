import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../../js/Action/TaskAction";
import "../Edittask/EditTask.css";
const EditTask = ({ elem }) => {
  const [show, setShow] = useState(false);
  const [task, setTask] = useState(elem.description);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const taskedit = () => {
    dispatch(editTask(elem.id, task));
    handleClose();
  };
  return (
    <div>
      <div style={{ marginTop: "-30px" }}>
        <button className="btn edit" onClick={handleShow}>
          <i className="fas fa-pencil-alt"></i>
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Task </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            className="form-control"
            value={task}
          />
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary" onClick={taskedit}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
