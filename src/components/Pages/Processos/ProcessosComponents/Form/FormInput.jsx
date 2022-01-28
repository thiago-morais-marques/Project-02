import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const FormInput = ({
  label, required, handleChange, values, name,
}) => {
  return (
    <TextField
      required={required}
      fullWidth
      name={name}
      label={label}
      onChange={handleChange}
      value={values}
    />
  );
};

FormInput.defaultProps = {
  values: '',
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default FormInput;
