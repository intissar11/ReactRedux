import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../Edittask/EditTask.css"
const EditTask = () => {
  const [show, setShow] = useState(false);
  const [task, setTask] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
<div style={{marginTop:"-30px"}}>     <button className="bttn" onClick={handleShow} ><i className="fas fa-pencil-alt"></i></button>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
