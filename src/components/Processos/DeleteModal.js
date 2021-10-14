import Modal from "react-bootstrap/Modal";

function DeleteModal(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header>
        <Modal.Title>Atenção</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Você tem certeza que deseja excluir este processo?
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={props.handleClose}>
          Cancelar
        </button>
        <button className="btn btn-danger" onClick={props.handleAction}>
          Excluir
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
