import React from 'react';
import ptBR from 'date-fns/locale/pt-BR';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import PropTypes from 'prop-types';

const DatePickerField = ({
  label, name, values, handleChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
      <MobileDatePicker
        mask="'__/__/____'"
        label={label}
        value={values}
        name={name}
        onChange={(value) => handleChange(name, value)}
        renderInput={(params) => <TextField fullWidth {...params} />}
      />
    </LocalizationProvider>
  );
};

DatePickerField.defaultProps = {
  values: '',
};

DatePickerField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
};

export default DatePickerField;
