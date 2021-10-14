import { useState } from "react";

import './CadastrarProcesso.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import { Modal, Form, Button, Col, Row } from 'react-bootstrap';
import { MdAddCircle } from 'react-icons/md';
import { IconContext } from "react-icons";

const CadastrarProcesso = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const [startDate, setStartDate] = useState(null);
    registerLocale('pt-BR', ptBR);
    setDefaultLocale('pt-BR');

    const handleSubmit = (event) => {
    const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    } 

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

                        <Form.Group 
                        as={Col} 
                        md={inputSize} 
                        >
                         <Form.Label className="ml-6">
                            Data
                        </Form.Label>
                        <DatePicker
                            className="date-picker ml-6"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            locale="pt-BR"
                            dateFormat="dd/MM/yyyy"
                            type="date"
                            name="dataDistribuicao" 
                        />
                        </Form.Group>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

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