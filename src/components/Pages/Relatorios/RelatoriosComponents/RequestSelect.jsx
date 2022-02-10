import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormControl, NativeSelect } from '@mui/material';

const RequestSelect = ({ suits, request, setRequest }) => {
  const handleChange = (event) => {
    setRequest(event.target.value);
  };

  const mySet = new Set();

  suits.forEach((e) => {
    return mySet.add(e.pedido);
  });

  const myIterator = mySet.values();

  const requestsArray = [];

  for (const value of myIterator) {
    requestsArray.push(value);
  }

  useEffect(() => {
    if (request === '' && requestsArray.length > 0) {
      setRequest(requestsArray[0]);
    }
  }, [requestsArray]);

  return (
    <FormControl>
      <NativeSelect
        name="pedido"
        onChange={handleChange}
        value={request}
        className="suit-report-select"
      >
        {requestsArray.map((suit) => {
          return (
            <option key={suit} value={suit}>
              {suit}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

RequestSelect.propTypes = {
  suits: PropTypes.arrayOf(PropTypes.object).isRequired,
  setRequest: PropTypes.func.isRequired,
  request: PropTypes.string.isRequired,
};

export default RequestSelect;
