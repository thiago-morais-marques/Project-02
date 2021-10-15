import { useState, useEffect } from "react";
//import { useHistory } from "react-router";
import axios from "axios";

import './CadastrarProcesso.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import ptBR from 'date-fns/locale/pt-BR';
import moment from "moment";
import { Modal, Form, InputGroup, FormControl, Button, Col, Row } from 'react-bootstrap';
import { MdModeEdit } from 'react-icons/md';

const EditarProcesso = (props) => {

    //const history = useHistory();
    const id = props.id;

    const [state, setState] = useState({
        poloAtivo: "",
        poloPassivo: "",
        poloCliente: "",
        processo: "",
        vara: "",
        pedido: "",
        dataDistribuicao: undefined,
        dataUltimoAndamento: undefined,
        juiz: "",
        sentencaProferida: false,
        julgamentoMerito: false,
        procedenciaPrimeiraInstancia: false,
        recursoSegundaInstancia: false,
        desembargadorRelator: "",
        julgamentoSegundaInstancia: false,
        procedenciaSegundaInstancia: false,
        recursoStj: false,
        ministroStjRelator: "",
        julgamentoStj: false,
        procedenciaStj: false,
        recursoStf: false,
        ministroStfRelator: "",
        julgamentoStf: false,
        procedenciaStf: false,
        transitoEmJulgado: false,
        dataTransitoEmJulgado: undefined
      });

    const [startDateDistribuicao, setStartDateDistribuicao] = useState(new Date());
    const [startDateAndamento, setStartDateAndamento] = useState(new Date());
    const [startDateTransito, setStartDateTransito] = useState(new Date());

    registerLocale('pt-BR', ptBR);
    setDefaultLocale('pt-BR');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const inputSize = 4;

    useEffect(() => {
        
        axios
          .get(`https://ironrest.herokuapp.com/processos/${id}`)
          .then((response) => {
            console.log(response);
            setState({ ...response.data });
            console.log(new Date(moment(response.data.dataDistribuicao, 'DD/MM/YYYY', true).format()).toLocaleDateString('pt-BR'));
            //console.log(response.data.dataUltimoAndamento);
            //console.log(response.data.dataTransitoEmJulgado);
          })
          .catch((err) => console.error(err));
      }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        //console.log(state)
 
        delete state._id;

        let dataDistribuicao = new Date(startDateDistribuicao).toLocaleDateString("pt-BR");
        let dataUltimoAndamento = new Date(startDateAndamento).toLocaleDateString("pt-BR");
        let dataTransitoEmJulgado = new Date(startDateTransito).toLocaleDateString("pt-BR");
    
        //console.log(dataDistribuicao, dataUltimoAndamento, dataTransitoEmJulgado)

        setValidated(true)

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.stopPropagation();
        } else {
            axios
            .put(`https://ironrest.herokuapp.com/processos/${id}`, 
            {...state, dataDistribuicao, dataUltimoAndamento, dataTransitoEmJulgado})
            .then((response) => {
                console.log(response);
                //history.push("/")
                document.location.reload(true)
            })
            .catch((err) => console.error(err))
        }
    }
    
    function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value,
    dataDistribuicao: startDateDistribuicao,
    dataUltimoAndamento: startDateAndamento,
    dataTransitoEmJulgado: startDateTransito});
    }

    return (

        <div className='add-new-suit'>

            <button className="text-only-button" onClick={handleShow}>
                    <MdModeEdit />
            </button>

            <Modal
            show={show}
            onHide={handleClose}
            size="xl"
            className="modal"
            >

                <Modal.Header closeButton="true">
                    <Modal.Title >
                        Editar processo
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
                                    value={state.poloAtivo}
                                    onChange={handleChange}
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
                                    value={state.poloPassivo}
                                    onChange={handleChange}
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
                                        <Form.Select
                                            required 
                                            type="text"
                                            name="poloCliente"    
                                            value={state.poloCliente}
                                            onChange={handleChange}
                                        >
                                            <option className="select">Selecione o Pólo do Cliente</option>
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

                                <InputGroup 
                                bsPrefix="input-group-container"
                                type="text"
                                name="processo"
                                value={state.processo}
                                onChange={handleChange}
                                >
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
                                    value={state.pedido}
                                    onChange={handleChange}
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
                                    value={state.vara}
                                    onChange={handleChange}
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
                                    selected={startDateDistribuicao}
                                    onChange={(date) => {
                                    setStartDateDistribuicao(date);
                                    state.dataDistribuicao = startDateDistribuicao
                                    }}
                                    locale="pt-BR"
                                    dateFormat="dd/MM/yyyy"
                                    type="date"
                                    name="dataDistribuicao"
                                    value={state.dataDistribuicao}
                                />
                                {console.log(startDateDistribuicao)}
                                {console.log(state.dataDistribuicao)}
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
                                    selected={startDateAndamento}
                                    onChange={(date) => {
                                        setStartDateAndamento(date);
                                        state.dataUltimoAndamento = startDateAndamento;
                                    }}
                                    locale="pt-BR"
                                    dateFormat="dd/MM/yyyy"
                                    type="date"
                                    name="dataUltimoAndamento"
                                    value={state.dataUltimoAndamento}
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
                                    value={state.juiz}
                                    onChange={handleChange}
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
                                    value={state.sentencaProferida}
                                    type='checkbox'
                                    onChange={(event) =>
                                        setState({ ...state, sentencaProferida: event.target.checked })
                                      }
                                    />
                                </Form.Group>
                                <Form.Group className="">
                                    <Form.Check
                                    label="Julgamento do Mérito"
                                    name="julgamentoMerito"
                                    value={state.julgamentoMerito}
                                    type='checkbox'
                                    onChange={(event) =>
                                        setState({ ...state, julgamentoMerito: event.target.checked })
                                      }

                                    />
                                </Form.Group>
                                
                            </Col>

                            <Col className="mt-4">
                                <Form.Group className="">
                                    <Form.Check
                                    label="Procedência - 1ª Instância"
                                    name="procedenciaPrimeiraInstancia"
                                    value={state.procedenciaPrimeiraInstancia}
                                    type='checkbox'
                                    onChange={(event) =>
                                        setState({ ...state, procedenciaPrimeiraInstancia: event.target.checked })
                                      }
                                    />
                                </Form.Group>
                                <Form.Group className="">
                                    <Form.Check
                                    label="Recurso para 2ª Instância"
                                    name="recursoSegundaInstancia"
                                    value={state.recursoSegundaInstancia}
                                    type='checkbox'
                                    onChange={(event) =>
                                        setState({ ...state, recursoSegundaInstancia: event.target.checked })
                                      }
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
                                    value={state.desembargadorRelator}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            
                            <Col xs={2} className="mt-4">
                                <Form.Group >
                                    <Form.Check
                                    label="Julgamento - 2ª Instância"
                                    name="julgamentoSegundaInstancia"
                                    value={state.julgamentoSegundaInstancia}
                                    type='checkbox'
                                    onChange={(event) =>
                                        setState({ ...state, julgamentoSegundaInstancia: event.target.checked })
                                      }
                                    />
                                </Form.Group>
                                <Form.Group className="">
                                    <Form.Check
                                    label="Procedência - 2ª Instância"
                                    name="procedenciaSegundaInstancia"
                                    value={state.procedenciaSegundaInstancia}
                                    type='checkbox'
                                    onChange={(event) =>
                                        setState({ ...state, procedenciaSegundaInstancia: event.target.checked })
                                      }
                                    />
                                </Form.Group>
                                
                            </Col>
                            <Col xs={3} className="mt-4">
                                <Form.Group className="">
                                    <Form.Check
                                    label="Recurso para o STJ"
                                    name="recursoStj"
                                    value={state.recursoStj}
                                    type='checkbox'
                                    onChange={(event) =>
                                        setState({ ...state, recursoStj: event.target.checked })
                                      }
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
                                    value={state.ministroStjRelator}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            
                            <Col xs={2} className="mt-4">
                                <Form.Group >
                                    <Form.Check
                                    label="Julgamento no STJ"
                                    name="julgamentoStj"
                                    value={state.julgamentoStj}
                                    type='checkbox'
                                    onChange={(event) =>
                                        setState({ ...state, julgamentoStj: event.target.checked })
                                      }
                                    />
                                </Form.Group>
                                <Form.Group className="">
                                    <Form.Check
                                    label="Procedência no STJ"
                                    name="procedenciaStj"
                                    value={state.procedenciaStj}
                                    type='checkbox'
                                    onChange={(event) =>
                                        setState({ ...state, procedenciaStj: event.target.checked })
                                      }
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
                                    value={state.ministroStfRelator}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            
                            <Col xs={2} className="mt-4">
                                <Form.Group >
                                    <Form.Check
                                    label="Julgamento no STF"
                                    name="julgamentoStf"
                                    value={state.julgamentoStf}
                                    type='checkbox'
                                    onChange={(event) =>
                                        setState({ ...state, julgamentoStf: event.target.checked })
                                      }
                                    />
                                </Form.Group>
                                <Form.Group className="">
                                    <Form.Check
                                    label="Procedência no STF"
                                    name="procedenciaStf"
                                    value={state.procedenciaStf}
                                    type='checkbox'
                                    onChange={(event) =>
                                        setState({ ...state, procedenciaStf: event.target.checked })
                                      }
                                    />
                                </Form.Group>
                                
                            </Col>
                            <Col className="mt-4">
                                <Form.Group className="">
                                    <Form.Check
                                    label="Trânsito em Julgado"
                                    name="transitoEmJulgado"
                                    value={state.transitoEmJulgado}
                                    type='checkbox'
                                    onChange={(event) =>
                                        setState({ ...state, transitoEmJulgado: event.target.checked })
                                      }
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
                                    selected={startDateTransito}
                                    onChange={(date) => {
                                        setStartDateTransito(date);
                                        state.dataTransitoEmJulgado = startDateTransito;
                                    }}
                                    locale="pt-BR"
                                    dateFormat="dd/MM/yyyy"
                                    type="date"
                                    name="dataTransitoEmJulgado"
                                    value={state.dataTransitoEmJulgado}
                                    />
                            </Form.Group>
                        </Row>

                            <Button type="submit" className="mb-3 submit-button">
                                Salvar
                            </Button>

                    </Form>

                </Modal.Body>

            </Modal>

        </div>

        

    );
}

export default EditarProcesso;