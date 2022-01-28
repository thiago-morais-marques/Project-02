import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import BaseForm from '../Form/BaseForm';
import './EditarProcesso.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import { getOneSuit, editSuit } from '../../../../../services/api';
import formSchema from '../../../../../schemas/formSchema';

const EditarProcesso = ({
  id, handleClose, show, setLoading,
}) => {
  const {
    values, errors, touched, isValid,
    setValues, handleChange, handleSubmit, setFieldValue, setFieldTouched,
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
      await editSuit(id, {
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

  const getSuit = async () => {
    const response = await getOneSuit(id);
    setValues(response);
  };

  useEffect(async () => {
    getSuit();
  }, []);

  return (
    <BaseForm
      title="Editar Processo"
      show={show}
      handleClose={handleClose}
      values={values}
      handleChange={handleChange}
      setFieldValue={setFieldValue}
      handleSubmit={handleSubmit}
      errors={errors}
      touched={touched}
      isValid={isValid}
      setFieldTouched={setFieldTouched}
    />
  );
};

EditarProcesso.propTypes = {
  id: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default EditarProcesso;
