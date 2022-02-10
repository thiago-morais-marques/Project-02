import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, NativeSelect } from '@mui/material';

const SuitSelect = ({ suits, setTargetSuit }) => {
  const handleChange = (event) => {
    setTargetSuit(event.target.value);
  };

  return (
    <FormControl>
      <NativeSelect
        name="processo"
        onChange={handleChange}
        className="suit-report-select"
      >
        {suits.map((suit) => {
          return (
            <option key={suit.processo} value={suit._id}>
              {suit.processo}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

SuitSelect.propTypes = {
  suits: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTargetSuit: PropTypes.func.isRequired,
};

export default SuitSelect;
