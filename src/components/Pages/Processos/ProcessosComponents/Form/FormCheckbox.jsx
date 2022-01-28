import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';

const FormCheckbox = ({
  label, name, values, handleChange,
}) => {
  return (
    <FormControlLabel
      sx={{ color: 'rgb(118, 118, 118)' }}
      control={<Checkbox sx={{ pt: 0, pb: '0.2rem' }} />}
      label={label}
      name={name}
      value={values}
      onChange={handleChange}
    />
  );
};

FormCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

export default FormCheckbox;
