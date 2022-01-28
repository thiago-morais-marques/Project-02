import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

const FormSelect = ({
  label, handleChange, values, name,
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
        onChange={handleChange}
        name={name}
        label={label}
      >
        <MenuItem value="Ativo">Ativo</MenuItem>
        <MenuItem value="Passivo">Passivo</MenuItem>
      </Select>
    </FormControl>
  );
};

FormSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

export default FormSelect;
