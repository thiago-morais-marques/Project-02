import { useState } from "react";

import './CadastrarProcesso.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

import { Modal, Form, Button, Col, Row } from 'react-bootstrap';
import { DatePicker } from 'antd';
import { MdAddCircle } from 'react-icons/md';
import { IconContext } from "react-icons";

const CadastrarProcesso = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    function onChange(date, dateString) {
        console.log(date, dateString);
      }

    //const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    const inputSize = 4;

    return (

        <div className='add-new-suit'>

            <button className="text-only-button" onClick={handleShow}>
                <IconContext.Provider value={{ color: "#063970", size:"1.1em", className: 'react-icons' }}>
                    Cadastrar novo processo&nbsp;
                    <MdAddCircle />
                </IconContext.Provider>
            </button>

            <Modal
            show={show}
            onHide={handleClose}
            size="xl"
            className="modal"
            >

                <Modal.Header closeButton="true">
                    <Modal.Title >
                        Cadastrar novo processo
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form 
                    className="modal-body ml-6" 
                    noValidate validated={validated} 
                    onSubmit={handleSubmit}
                    >

                        <Row className="mb-3">
                            
                            <Form.Group 
                            as={Col} 
                            md={inputSize} 
                            >
                                <Form.Label>
                                    Pólo Ativo
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Pólo Ativo"
                                    name="poloAtivo"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Campo Obrigatório
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group 
                            as={Col} 
                            md={inputSize} 
                            >
                                <Form.Label>
                                    Pólo Passivo
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="poloPassivo"
                                    placeholder="Pólo Passivo"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Campo Obrigatório
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <Row className="mb-3">

                            <Form.Group 
                            as={Col} 
                            md={inputSize} 
                            >
                                <Form.Label>
                                    Juiz
                                </Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Juiz" 
                                name="juiz"
                                required 
                                />
                                <Form.Control.Feedback type="invalid">
                                    Campo Obrigatório
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group 
                            as={Col} 
                            md={inputSize} 
                            >
                                <Form.Label>
                                    Pedido
                                </Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Pedido" 
                                name="pedido"
                                required 
                                />
                                <Form.Control.Feedback type="invalid">
                                    Campo Obrigatório
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <DatePicker onChange={onChange} />

                        <Form.Group className="mb-3 ml-6">
                            <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                            />
                        </Form.Group>

                        <Button type="submit" className="ml-6">
                            Cadastrar
                        </Button>

                    </Form>

                </Modal.Body>

            </Modal>

        </div>

        

    );
}

export default CadastrarProcesso;