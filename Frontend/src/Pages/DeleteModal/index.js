import React from "react";
import { ContainerModal, Modal, Button } from "./styles";

const DeleteModal = props => {

  if(!props.show) {
    return null;
  }

  return (
    <ContainerModal>
      <Modal>
        <h2>Deseja realmente deletar o herói?</h2>
        <div>
        <Button>SIM</Button>
        <Button onClick={props.onClose}>NÃO</Button>
        </div>
      </Modal>
    </ContainerModal>
  )
};

export default DeleteModal;