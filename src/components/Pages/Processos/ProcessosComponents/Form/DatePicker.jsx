import React from 'react';
import ptBR from 'date-fns/locale/pt-BR';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import PropTypes from 'prop-types';

const DatePickerField = ({
  label, name, values, handleChange, touched, errors,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
      <MobileDatePicker
        mask="__/__/____"
        label={label}
        value={values}
        name={name}
        onChange={(value) => handleChange(name, value)}
        renderInput={(params) => <TextField fullWidth {...params} />}
        error={touched && Boolean(errors)}
        helperText={touched && errors}
      />
    </LocalizationProvider>
  );
};

DatePickerField.defaultProps = {
  values: '',
  errors: '',
  touched: false,
};

DatePickerField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  touched: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default DatePickerField;
