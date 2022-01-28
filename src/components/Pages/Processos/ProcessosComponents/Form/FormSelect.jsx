import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

const FormSelect = ({
  label, handleChange, values, name, touched, errors,
}) => {
  return (
    <FormControl
      fullWidth
      required
      variant="outlined"
    >
      <InputLabel>{label}</InputLabel>
      <Select
        value={values}
        onChange={(e) => handleChange(name, e)}
        name={name}
        label={label}
        error={touched && Boolean(errors)}
      >
        <MenuItem value="Ativo">Ativo</MenuItem>
        <MenuItem value="Passivo">Passivo</MenuItem>
      </Select>
    </FormControl>
  );
};

FormSelect.defaultProps = {
  errors: '',
  touched: false,
};

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  errors: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  touched: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default FormSelect;
