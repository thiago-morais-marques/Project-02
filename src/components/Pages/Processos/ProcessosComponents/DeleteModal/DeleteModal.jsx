import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteSuit } from '../../../../../services/api';

const DeleteModal = ({
  id, open, handleClose, setLoading,
}) => {
  const [deleteAction, setDeleteAction] = useState(false);

  const handleDelete = () => {
    setDeleteAction(true);
  };

  useEffect(async () => {
    if (deleteAction) {
      const userResponse = await deleteSuit(id);
      setLoading(true);
      return userResponse;
    }
    return null;
  }, [handleDelete]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        Atenção!
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Tem certeza que deseja excluir este processo?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleDelete} autoFocus>
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
};

DeleteModal.propTypes = {
  id: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default DeleteModal;
