import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const FormInput = ({
  label, required, handleChange, values, name, touched, errors,
}) => {
  return (
    <TextField
      required={required}
      fullWidth
      name={name}
      label={label}
      onChange={(e) => handleChange(name, e)}
      value={values}
      error={touched && Boolean(errors)}
      helperText={touched && errors}
    />
  );
};

FormInput.defaultProps = {
  values: '',
  errors: '',
  touched: false,
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  touched: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default FormInput;
