import React, {useState} from "react";
import './CadastrarProcesso.css';
import Modal from 'react-bootstrap/Modal';
import { MdAddCircle } from 'react-icons/md';
import { IconContext } from "react-icons";
import 'antd/dist/antd.css';

import FormCadastroProcesso from "./FormCadastroProcesso";

const CadastrarProcesso = () => {

    const [show, setShow] = useState(false);
    
    return (

        <>

        <button className="text-only-button" onClick={() => setShow(true)}>
            <IconContext.Provider value={{ color: "#063970", size:"1.1em", className: 'react-icons' }}>
                Cadastrar novo processo&nbsp;
                <MdAddCircle />  
            </IconContext.Provider>
        </button>
    
        <Modal
            show={show}
            onHide={() => setShow(false)}
            size="xl"
        >

            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Cadastrar novo processo
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <FormCadastroProcesso />
            </Modal.Body>

        </Modal>

        </>
    );
}

export default CadastrarProcesso;