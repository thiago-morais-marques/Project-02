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
  show, handleClose, values, handleChange, handleSubmit, setFieldValue, title,
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
              handleChange={handleChange}
              values={values.poloAtivo}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              label={fieldLabels[1]}
              name="poloPassivo"
              required={true}
              handleChange={handleChange}
              values={values.poloPassivo}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormSelect
              label={fieldLabels[2]}
              name="poloCliente"
              required={true}
              handleChange={handleChange}
              values={values.poloCliente}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              label={fieldLabels[3]}
              name="processo"
              required={true}
              handleChange={handleChange}
              values={values.processo}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              label={fieldLabels[4]}
              name="pedido"
              required={true}
              handleChange={handleChange}
              values={values.pedido}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormInput
              label={fieldLabels[5]}
              required={true}
              name="vara"
              handleChange={handleChange}
              values={values.vara}
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
              handleChange={handleChange}
              values={values.juiz}
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
              handleChange={handleChange}
              values={values.desembargadorRelator}
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
              handleChange={handleChange}
              values={values.ministroStjRelator}
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
              handleChange={handleChange}
              values={values.ministroStfRelator}
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
              handleChange={setFieldValue}
              values={values.dataDistribuicao}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DatePickerField
              label={fieldLabels[24]}
              name="dataUltimoAndamento"
              handleChange={setFieldValue}
              values={values.dataUltimoAndamento}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DatePickerField
              label={fieldLabels[25]}
              name="dataTransitoEmJulgado"
              handleChange={setFieldValue}
              values={values.dataTransitoEmJulgado}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions className="dialog-footer">
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleClose} type="submit">Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

BaseForm.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
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
