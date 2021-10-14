import { useState } from "react";

import './CadastrarProcesso.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import { Modal, Form, InputGroup, FormControl, Button, Col, Row } from 'react-bootstrap';
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
                                    Pólo do Cliente
                                </Form.Label>
                                        <Form.Select >
                                            <option value="Ativo">Ativo</option>
                                            <option value="Passivo">Passivo</option>
                                        </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    Campo Obrigatório
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group 
                            as={Col} 
                            md={inputSize} 
                            >
                                <Form.Label>
                                    Número do Processo
                                </Form.Label>

                                <InputGroup bsPrefix="input-group-container">
                                    <FormControl 
                                    type="text" 
                                    bsPrefix="input-01"
                                    maxLength="7"
                                    />
                                        <InputGroup.Text>-</InputGroup.Text>
                                    <FormControl 
                                    type="text" 
                                    bsPrefix="input-02"
                                    maxLength="2"
                                    />
                                        <InputGroup.Text>.</InputGroup.Text>
                                    <FormControl 
                                    type="text" 
                                    bsPrefix="input-03"
                                    maxLength="4"
                                    />
                                        <InputGroup.Text>.0.01.</InputGroup.Text>
                                    <FormControl 
                                    type="text" 
                                    bsPrefix="input-04"
                                    maxLength="4"
                                    />
                                </InputGroup>

                            </Form.Group>

                        </Row>

                        <Row className="mb-3">
                            
                            <Form.Group 
                            as={Col} 
                            md={inputSize} 
                            >
                                <Form.Label>
                                    Pedido
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="pedido"
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
                                    Vara
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="vara"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Campo Obrigatório
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <Row className="row mb-3">
                            <Form.Group 
                            as={Col} 
                            md={inputSize} 
                            >
                            <Form.Label >
                                Data de Distribuição
                            </Form.Label>
                                <DatePicker
                                    className="date-picker"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    locale="pt-BR"
                                    dateFormat="dd/MM/yyyy"
                                    type="date"
                                    name="dataDistribuicao" 
                                />
                            </Form.Group>

                            <Form.Group 
                            as={Col} 
                            md={inputSize} 
                            >
                            <Form.Label >
                                Data do Último Andamento
                            </Form.Label>
                                <DatePicker
                                    className="date-picker"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    locale="pt-BR"
                                    dateFormat="dd/MM/yyyy"
                                    type="date"
                                    name="dataUltimoAndamento" 
                                />
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
                                    required
                                    type="text"
                                    name="juiz"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Campo Obrigatório
                                </Form.Control.Feedback>
                            </Form.Group>
                            
                            <Col xs={2} className="mt-4">
                                <Form.Group >
                                    <Form.Check
                                    label="Sentença Proferida"
                                    name="sentencaProferida"
                                    />
                                </Form.Group>
                                <Form.Group className="">
                                    <Form.Check
                                    label="Julgamento do Mérito"
                                    name="julgamentoMerito"
                                    />
                                </Form.Group>
                                
                            </Col>

                            <Col className="mt-4">
                                <Form.Group className="">
                                    <Form.Check
                                    label="Procedência - 1ª Instância"
                                    name="procedenciaPrimeiraInstancia"
                                    />
                                </Form.Group>
                                <Form.Group className="">
                                    <Form.Check
                                    label="Recurso para 2ª Instância"
                                    name="recursoSegundaInstancia"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            
                            <Form.Group 
                            as={Col} 
                            md={inputSize} 
                            >
                                <Form.Label>
                                    Desembargador Relator
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="desembargadorRelator"
                                />
                            </Form.Group>
                            
                            <Col xs={2} className="mt-4">
                                <Form.Group >
                                    <Form.Check
                                    label="Julgamento - 2ª Instância"
                                    name="julgamentoSegundaInstancia"
                                    />
                                </Form.Group>
                                <Form.Group className="">
                                    <Form.Check
                                    label="Procedência - 2ª Instância"
                                    name="procedenciaSegundaInstancia"
                                    />
                                </Form.Group>
                                
                            </Col>
                            <Col xs={3} className="mt-4">
                                <Form.Group className="">
                                    <Form.Check
                                    label="Recurso para o STJ"
                                    name="recursoStj"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            
                            <Form.Group 
                            as={Col} 
                            md={inputSize} 
                            >
                                <Form.Label>
                                    Ministro do STJ Relator
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ministroStjRelator"
                                />
                            </Form.Group>
                            
                            <Col xs={2} className="mt-4">
                                <Form.Group >
                                    <Form.Check
                                    label="Julgamento no STJ"
                                    name="julgamentoStj"
                                    />
                                </Form.Group>
                                <Form.Group className="">
                                    <Form.Check
                                    label="Procedência no STJ"
                                    name="procedenciaStj"
                                    />
                                </Form.Group>
                                
                            </Col>
                            <Col className="mt-4">
                                <Form.Group className="">
                                    <Form.Check
                                    label="Recurso para o STF"
                                    name="recursoStf"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            
                            <Form.Group 
                            as={Col} 
                            md={inputSize} 
                            >
                                <Form.Label>
                                    Ministro do STF Relator
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name="ministroStfRelator"
                                />
                            </Form.Group>
                            
                            <Col xs={2} className="mt-4">
                                <Form.Group >
                                    <Form.Check
                                    label="Julgamento no STF"
                                    name="julgamentoStf"
                                    />
                                </Form.Group>
                                <Form.Group className="">
                                    <Form.Check
                                    label="Procedência no STF"
                                    name="procedenciaStf"
                                    />
                                </Form.Group>
                                
                            </Col>
                            <Col className="mt-4">
                                <Form.Group className="">
                                    <Form.Check
                                    label="Trânsito em Julgado"
                                    name="transitoEmJulgado"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Form.Group 
                                className="mb-4"
                                as={Col} 
                                md={inputSize} 
                                >
                                <Form.Label >
                                    Data do Trânsito em Julgado
                                </Form.Label>
                                    <DatePicker
                                        className="date-picker"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        locale="pt-BR"
                                        dateFormat="dd/MM/yyyy"
                                        type="date"
                                        name="dataTransitoEmJulgado" 
                                    />
                            </Form.Group>
                        </Row>

                            <Button type="submit" className="mb-3 submit-button">
                                Cadastrar
                            </Button>

                    </Form>

                </Modal.Body>

            </Modal>

        </div>

        

    );
}

export default CadastrarProcesso;