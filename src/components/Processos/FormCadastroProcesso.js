import { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { Form, Button, Row, Col, Input, Checkbox, DatePicker, Select, message } from 'antd';
import 'antd/dist/antd.css';
import './FormCadastroProcesso.css'

const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 }};


const FormCadastroProcesso = () => {

    const [loading, setLoading] = useState(false);

    const history = useHistory();

    

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }
    
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const handleSubmit = (values) => {
        setLoading(true);
        axios.post('http://localhost:4000/processos', values)
        .then(response => {
            console.log(response)
            setLoading(false);
            message.success('Processo adicionado com sucesso');
            history.push('/');
        })
        .catch(error => {
            setLoading(false);
            message.error(error);
        })
    }

    return (

        <div className='align'>
            <Form 
            {...layout}
            onFinish={handleSubmit}
            >
                <Form.Item
                    label="Pólo Ativo"
                    name="poloAtivo"
                    rules={[{ required: true, message: 'Campo Obrigatório'}]}
                >
                    <Input placeholder="Pólo Ativo"/>
                </Form.Item>

                <Form.Item
                    label="Pólo Passivo"
                    name="poloPassivo"
                    rules={[{ required: true, message: 'Campo Obrigatório'}]}
                >
                    <Input placeholder="Pólo Passivo"/>
                </Form.Item>

                <Form.Item 
                name="poloCliente" 
                label="Pólo do Cliente" 
                rules={[{required: true, message: 'Campo Obrigatório', type: 'array'}]}
                >
                    <Select mode="multiple" placeholder="Selecione o Pólo do Cliente">
                        <Select.Option value="Ativo">Ativo</Select.Option>
                        <Select.Option value="Passivo">Passivo</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Número do Processo"
                    name="processo"
                    rules={[{ required: true, message: 'Campo Obrigatório'}]}
                >
                    <Input placeholder="Número do Processo em Formato CNJ"/>
                </Form.Item>

                <Form.Item
                    label="Vara"
                    name="vara"
                    rules={[{ required: true, message: 'Campo Obrigatório'}]}
                >
                    <Input placeholder="Vara"/>
                </Form.Item>

                <Form.Item
                    label="Pedido"
                    name="pedido"
                    rules={[{ required: true, message: 'Campo Obrigatório'}]}
                >
                    <Input placeholder="Pedido"/>
                </Form.Item>

                <Row className='row'>
                    <Col span={8} className='col-dates-1'>
                    
                        <Form.Item 
                        label="Data de Distribuição"
                        name="dataDistribuicao"
                        rules={[{ type: "object", required: true, message: 'Campo Obrigatório'}]}
                        >
                            <DatePicker format={dateFormatList} />
                        </Form.Item>

                    </Col>

                    <Col span={8} className='col-dates-2'>

                        <Form.Item 
                        label="Último Andamento"
                        name='dataUltimoAndamento'
                        >
                            <DatePicker format={dateFormatList} />
                        </Form.Item>

                    </Col>
                </Row>

                <Form.Item
                    label="Nome do Juiz"
                    name="juiz"
                    rules={[{ required: true, message: 'Campo Obrigatório'}]}
                >
                    <Input placeholder="Nome do Juiz"/>
                </Form.Item>

                <Row className='row'>
                    <Col span={10} className='col-checkbox-1'>

                        <Form.Item 
                        label="Sentença Proferida"
                        name="sentencaProferida"
                        >  
                            <Checkbox onChange={onChange}></Checkbox>
                        </Form.Item>

                        <Form.Item 
                        label="Julgamento do Mérito"
                        name='julgamentoMerito'
                        >  
                            <Checkbox onChange={onChange}></Checkbox>
                        </Form.Item>

                    </Col>

                    <Col span={10} className='col-checkbox-2'>

                        <Form.Item 
                        label="Procedência em 1ª Instância"
                        name='procedenciaPrimeiraInstancia'
                        >  
                            <Checkbox onChange={onChange}></Checkbox>
                        </Form.Item>
                        
                        <Form.Item 
                        label="Recurso para 2ª Instância"
                        name='recursoSegundaInstancia'
                        >  
                            <Checkbox onChange={onChange}></Checkbox>
                        </Form.Item>

                    </Col>
                </Row>

                <Form.Item
                    label="Nome do Desembargador Relator"
                    name="desembargadorRelator"
                >
                    <Input placeholder="Nome do Desembargador Relator"/>
                </Form.Item>

                <Row className='row'>
                    <Col span={10} className='col-checkbox-1'>

                        <Form.Item 
                        label="Julgamento em 2ª Instância"
                        name='julgamentoSegundaInstancia'
                        >  
                            <Checkbox onChange={onChange}></Checkbox>
                        </Form.Item>

                        <Form.Item 
                        label="Procedência em 2ª Instância"
                        name='procedenciaSegundaInstancia'
                        >  
                            <Checkbox onChange={onChange}></Checkbox>
                        </Form.Item>

                    </Col>

                    <Col span={10} className='col-checkbox-2'>

                        <Form.Item 
                        label="Recurso para o STJ"
                        name='recursoStj'
                        >  
                            <Checkbox onChange={onChange}></Checkbox>
                        </Form.Item>
                        
                    </Col>
                </Row>

                <Form.Item
                    label="Nome do Ministro do STJ Relator"
                    name="ministroStjRelator"
                >
                    <Input placeholder="Nome do Ministro do STJ Relator"/>
                </Form.Item>

                <Row className='row'>
                    <Col span={10} className='col-checkbox-1'>

                        <Form.Item 
                        label="Julgamento no STJ"
                        name='julgamentoStj'
                        >  
                            <Checkbox onChange={onChange}></Checkbox>
                        </Form.Item>
                        
                        <Form.Item 
                        label="Procedência no STJ"
                        name='procedenciaStj'
                        >  
                            <Checkbox onChange={onChange}></Checkbox>
                        </Form.Item>

                    </Col>

                    <Col span={10} className='col-checkbox-2'>

                        <Form.Item 
                        label="Recurso para o STF"
                        name='recursoStf'
                        >  
                            <Checkbox onChange={onChange}></Checkbox>
                        </Form.Item>

                    </Col>
                </Row>

                <Form.Item
                    label="Nome do Ministro do STF Relator"
                    name="ministroStjRelator"
                >
                    <Input placeholder="Nome do Ministro do STJ Relator"/>
                </Form.Item>

                <Row className='row'>
                    <Col span={10} className='col-checkbox-1'>

                        <Form.Item 
                        label="Julgamento no STF"
                        name='julgamentoStf'
                        >  
                            <Checkbox onChange={onChange}></Checkbox>
                        </Form.Item>
                    
                    </Col>

                    <Col span={10} className='col-checkbox-2'>

                        <Form.Item 
                        label="Procedência no STF"
                        name='procedenciaStf'
                        >  
                            <Checkbox onChange={onChange}></Checkbox>
                        </Form.Item>

                    </Col>
                </Row>

                <Row className='row'>
                    <Col span={10} className='col-checkbox-1'>

                        <Form.Item 
                        label="Trânsito em julgado"
                        name='transitoEmJulgado'
                        >  
                            <Checkbox onChange={onChange}></Checkbox>
                        </Form.Item>

                        <Form.Item 
                        label="Data do Trânsito em Julgado"
                        name="dataTransitoEmJulgado"
                        >
                            <DatePicker format={dateFormatList} />
                        </Form.Item>

                    </Col>
                </Row>

                <div style={{textAlign: "right"}}>

                    <Button type="primary" loading={loading} htmlType="submit">
                    Salvar
                    </Button>{' '}

                    {/*<Button type="danger" htmlType="button" onClick={() => history.push('/processos')}>
                    Voltar
                    </Button>*/}
                </div>

            </Form>
        </div>
    );

}

export default FormCadastroProcesso; 