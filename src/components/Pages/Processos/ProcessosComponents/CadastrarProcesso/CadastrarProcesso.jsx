import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { MdAddCircle } from 'react-icons/md';
import { IconContext } from 'react-icons';
import BaseForm from '../Form/BaseForm';
import './CadastrarProcesso.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import { postSuit } from '../../../../../services/api';
import formSchema from '../../../../../schemas/formSchema';

const CadastrarProcesso = ({ setLoading }) => {
  const {
    values, handleChange, handleSubmit, setFieldValue,
  } = useFormik({
    initialValues: {
      poloAtivo: '',
      poloPassivo: '',
      poloCliente: '',
      processo: '',
      vara: '',
      pedido: '',
      juiz: '',
      sentencaProferida: false,
      julgamentoMerito: false,
      procedenciaPrimeiraInstancia: false,
      recursoSegundaInstancia: false,
      desembargadorRelator: '',
      julgamentoSegundaInstancia: false,
      procedenciaSegundaInstancia: false,
      recursoStj: false,
      ministroStjRelator: '',
      julgamentoStj: false,
      procedenciaStj: false,
      recursoStf: false,
      ministroStfRelator: '',
      julgamentoStf: false,
      procedenciaStf: false,
      transitoEmJulgado: false,
      dataDistribuicao: null,
      dataUltimoAndamento: null,
      dataTransitoEmJulgado: null,
    },
    validationSchema: formSchema,
    onSubmit: async (formData) => {
      await postSuit({
        poloAtivo: formData.poloAtivo,
        poloPassivo: formData.poloPassivo,
        poloCliente: formData.poloCliente,
        processo: formData.processo,
        vara: formData.vara,
        pedido: formData.pedido,
        juiz: formData.juiz,
        sentencaProferida: formData.sentencaProferida,
        julgamentoMerito: formData.julgamentoMerito,
        procedenciaPrimeiraInstancia: formData.procedenciaPrimeiraInstancia,
        recursoSegundaInstancia: formData.recursoSegundaInstancia,
        desembargadorRelator: formData.desembargadorRelator,
        julgamentoSegundaInstancia: formData.julgamentoSegundaInstancia,
        procedenciaSegundaInstancia: formData.procedenciaSegundaInstancia,
        recursoStj: formData.recursoStj,
        ministroStjRelator: formData.ministroStjRelator,
        julgamentoStj: formData.julgamentoStj,
        procedenciaStj: formData.procedenciaStj,
        recursoStf: formData.recursoStf,
        ministroStfRelator: formData.ministroStfRelator,
        julgamentoStf: formData.julgamentoStf,
        procedenciaStf: formData.procedenciaStf,
        transitoEmJulgado: formData.transitoEmJulgado,
        dataDistribuicao: formData.dataDistribuicao,
        dataUltimoAndamento: formData.dataUltimoAndamento,
        dataTransitoEmJulgado: formData.dataTransitoEmJulgado,
      });
      setLoading(true);
    },
  });

  const [show, setShow] = useState(false);

  const memoizedValues = useMemo(() => ({ color: '#063970', size: '1.1em', className: 'react-icons' }), []);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <div className="add-new-suit">
      <button
        className="text-only-button"
        type="button"
        onClick={handleShow}
      >
        <IconContext.Provider value={memoizedValues}>
          Cadastrar novo processo&nbsp;
          <MdAddCircle />
        </IconContext.Provider>
      </button>
      <BaseForm
        title="Cadastrar Novo Processo"
        show={show}
        handleClose={handleClose}
        values={values}
        handleChange={handleChange}
        setFieldValue={setFieldValue}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

CadastrarProcesso.propTypes = {
  setLoading: PropTypes.func.isRequired,
};

export default CadastrarProcesso;
