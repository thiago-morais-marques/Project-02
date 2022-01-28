import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Divider, Dialog, DialogTitle, DialogContent, DialogActions, Button,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormCheckbox from './FormCheckbox';
import DatePickerField from './DatePicker';

const BaseForm = ({
  show, handleClose, values, handleChange, handleSubmit,
  setFieldValue, title, errors, touched, isValid, setFieldTouched,
}) => {
  const fieldLabels = [
    'Pólo Ativo',
    'Pólo Passivo',
    'Pólo Cliente',
    'Nº Processo',
    'Pedido',
    'Vara',
    'Juiz',
    'Sentença Proferida',
    'Julgamento do Mérito',
    'Procedência em 1ª Instância',
    'Recurso para 2ª Instância',
    'Desembargador-Relator',
    'Julgamento em 2ª Instância',
    'Procedência em 2ª Instância',
    'Recurso para o STJ',
    'Ministro-Relator (STJ)',
    'Julgamento no STJ',
    'Procedência no STJ',
    'Recurso para o STF',
    'Ministro-Relator (STF)',
    'Julgamento no STF',
    'Procedência no STF',
    'Trânsito em Julgado',
    'Data de Distribuição',
    'Último Andamento',
    'Data do Trânsito em Julgado',
  ];

  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const changeField = (name, e) => {
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const changeDate = (name, value) => {
    setFieldValue(name, value);
    setFieldTouched(name, true, false);
  };

  return (
    <Dialog
      component="form"
      open={show}
      onClose={handleClose}
      onSubmit={handleSubmit}
      maxWidth="lg"
      fullWidth
      fullScreen={fullScreen}
      scroll="paper"
      sx={{ border: 'green px solid' }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid
          container
          sx={{ mt: 1 }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={4}>
            <FormInput
              label={fieldLabels[0]}
              name="poloAtivo"
              required={true}
              handleChange={changeField}
              values={values.poloAtivo}
              errors={errors.poloAtivo}
              touched={touched.poloAtivo}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              label={fieldLabels[1]}
              name="poloPassivo"
              required={true}
              handleChange={changeField}
              values={values.poloPassivo}
              errors={errors.poloPassivo}
              touched={touched.poloPassivo}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormSelect
              label={fieldLabels[2]}
              name="poloCliente"
              required={true}
              handleChange={changeField}
              values={values.poloCliente}
              errors={errors.poloCliente}
              touched={touched.poloCliente}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              label={fieldLabels[3]}
              name="processo"
              required={true}
              handleChange={changeField}
              values={values.processo}
              errors={errors.processo}
              touched={touched.processo}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              label={fieldLabels[4]}
              name="pedido"
              required={true}
              handleChange={changeField}
              values={values.pedido}
              errors={errors.pedido}
              touched={touched.pedido}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              label={fieldLabels[5]}
              required={true}
              name="vara"
              handleChange={changeField}
              values={values.vara}
              errors={errors.vara}
              touched={touched.vara}
            />
          </Grid>
        </Grid>
        <Divider variant="middle" sx={{ mt: 3 }} />
        <Grid
          container
          sx={{ mt: 1 }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={4}>
            <FormInput
              label={fieldLabels[6]}
              required={false}
              name="juiz"
              handleChange={changeField}
              values={values.juiz}
              errors={errors.juiz}
              touched={touched.juiz}
            />
          </Grid>
          <Grid item xs={12} md={2.66} sx={{ alignSelf: 'center' }}>
            <FormCheckbox
              label={fieldLabels[7]}
              name="sentencaProferida"
              handleChange={handleChange}
              values={values.sentencaProferida}
            />
          </Grid>
          <Grid item xs={12} md={2.66} sx={{ alignSelf: 'center' }}>
            <FormCheckbox
              label={fieldLabels[8]}
              name="julgamentoMerito"
              handleChange={handleChange}
              values={values.julgamentoMerito}
            />
          </Grid>
          <Grid item xs={12} md={2.66} sx={{ alignSelf: 'center' }}>
            <FormCheckbox
              label={fieldLabels[9]}
              name="procedenciaPrimeiraInstancia"
              handleChange={handleChange}
              values={values.procedenciaPrimeiraInstancia}
            />
          </Grid>
        </Grid>
        <Divider variant="middle" sx={{ mt: 3 }} />
        <Grid
          container
          sx={{ mt: 1 }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={4}>
            <FormInput
              label={fieldLabels[11]}
              required={false}
              name="desembargadorRelator"
              handleChange={changeField}
              values={values.desembargadorRelator}
              errors={errors.desembargadorRelator}
              touched={touched.desembargadorRelator}
            />
          </Grid>
          <Grid item xs={12} md={2.66} sx={{ alignSelf: 'center' }}>
            <FormCheckbox
              label={fieldLabels[10]}
              name="recursoSegundaInstancia"
              handleChange={handleChange}
              values={values.recursoSegundaInstancia}
            />
          </Grid>
          <Grid item xs={12} md={2.66} sx={{ alignSelf: 'center' }}>
            <FormCheckbox
              label={fieldLabels[12]}
              name="julgamentoSegundaInstancia"
              handleChange={handleChange}
              values={values.julgamentoSegundaInstancia}
            />
          </Grid>
          <Grid item xs={12} md={2.66} sx={{ alignSelf: 'center' }}>
            <FormCheckbox
              label={fieldLabels[13]}
              name="procedenciaSegundaInstancia"
              handleChange={handleChange}
              values={values.procedenciaSegundaInstancia}
            />
          </Grid>
        </Grid>
        <Divider variant="middle" sx={{ mt: 3 }} />
        <Grid
          container
          sx={{ mt: 1 }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={4}>
            <FormInput
              label={fieldLabels[15]}
              required={false}
              name="ministroStjRelator"
              handleChange={changeField}
              values={values.ministroStjRelator}
              errors={errors.ministroStjRelator}
              touched={touched.ministroStjRelator}
            />
          </Grid>
          <Grid item xs={12} md={2.66} sx={{ alignSelf: 'center' }}>
            <FormCheckbox
              label={fieldLabels[14]}
              name="recursoStj"
              handleChange={handleChange}
              values={values.recursoStj}
            />
          </Grid>
          <Grid item xs={12} md={2.66} sx={{ alignSelf: 'center' }}>
            <FormCheckbox
              label={fieldLabels[16]}
              name="julgamentoStj"
              handleChange={handleChange}
              values={values.julgamentoStj}
            />
          </Grid>
          <Grid item xs={12} md={2.66} sx={{ alignSelf: 'center' }}>
            <FormCheckbox
              label={fieldLabels[17]}
              name="procedenciaStj"
              handleChange={handleChange}
              values={values.procedenciaStj}
            />
          </Grid>
        </Grid>
        <Divider variant="middle" sx={{ mt: 3 }} />
        <Grid
          container
          sx={{ mt: 1 }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={4}>
            <FormInput
              label={fieldLabels[19]}
              required={false}
              name="ministroStfRelator"
              handleChange={changeField}
              values={values.ministroStfRelator}
              errors={errors.ministroStfRelator}
              touched={touched.ministroStfRelator}
            />
          </Grid>
          <Grid item xs={12} md={2.66} sx={{ alignSelf: 'center' }}>
            <FormCheckbox
              label={fieldLabels[18]}
              name="recursoStf"
              handleChange={handleChange}
              values={values.recursoStf}
            />
          </Grid>
          <Grid item xs={12} md={2.66} sx={{ alignSelf: 'center' }}>
            <FormCheckbox
              label={fieldLabels[20]}
              name="julgamentoStf"
              handleChange={handleChange}
              values={values.julgamentoStf}
            />
          </Grid>
          <Grid item xs={12} md={2.66} sx={{ alignSelf: 'center' }}>
            <FormCheckbox
              label={fieldLabels[21]}
              name="procedenciaStf"
              handleChange={handleChange}
              values={values.procedenciaStf}
            />
          </Grid>
        </Grid>
        <Divider variant="middle" sx={{ mt: 3 }} />
        <Grid
          container
          sx={{ mt: 1 }}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={3} sx={{ alignSelf: 'center' }}>
            <FormCheckbox
              label={fieldLabels[22]}
              name="transitoEmJulgado"
              handleChange={handleChange}
              values={values.transitoEmJulgado}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DatePickerField
              label={fieldLabels[23]}
              name="dataDistribuicao"
              handleChange={changeDate}
              values={values.dataDistribuicao}
              errors={errors.dataDistribuicao}
              touched={touched.dataDistribuicao}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DatePickerField
              label={fieldLabels[24]}
              name="dataUltimoAndamento"
              handleChange={setFieldValue}
              values={values.dataUltimoAndamento}
              errors={errors.dataUltimoAndamento}
              touched={touched.dataUltimoAndamento}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DatePickerField
              label={fieldLabels[25]}
              name="dataTransitoEmJulgado"
              handleChange={setFieldValue}
              values={values.dataTransitoEmJulgado}
              errors={errors.dataTransitoEmJulgado}
              touched={touched.dataTransitoEmJulgado}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions className="dialog-footer">
        <Button onClick={handleClose}>Cancelar</Button>
        <Button type="submit" disabled={!isValid}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

BaseForm.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.bool])).isRequired,
  values: PropTypes.shape({
    poloAtivo: PropTypes.string,
    poloPassivo: PropTypes.string,
    poloCliente: PropTypes.string,
    processo: PropTypes.string,
    vara: PropTypes.string,
    pedido: PropTypes.string,
    juiz: PropTypes.string,
    sentencaProferida: PropTypes.bool,
    julgamentoMerito: PropTypes.bool,
    procedenciaPrimeiraInstancia: PropTypes.bool,
    recursoSegundaInstancia: PropTypes.bool,
    desembargadorRelator: PropTypes.string,
    julgamentoSegundaInstancia: PropTypes.bool,
    procedenciaSegundaInstancia: PropTypes.bool,
    recursoStj: PropTypes.bool,
    ministroStjRelator: PropTypes.string,
    julgamentoStj: PropTypes.bool,
    procedenciaStj: PropTypes.bool,
    recursoStf: PropTypes.bool,
    ministroStfRelator: PropTypes.string,
    julgamentoStf: PropTypes.bool,
    procedenciaStf: PropTypes.bool,
    transitoEmJulgado: PropTypes.bool,
    dataDistribuicao: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    dataUltimoAndamento: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    dataTransitoEmJulgado: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  }).isRequired,
};

export default BaseForm;
