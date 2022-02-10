import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import '../Relatorios.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.secondary,
}));

const SuitContainer = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Item elevation={1} className="suit-container-nav">
        {children}
      </Item>
    </div>
  );
};

SuitContainer.defaultProps = {
  children: '',
};

SuitContainer.propTypes = {
  children: PropTypes.node,
};

export default SuitContainer;
