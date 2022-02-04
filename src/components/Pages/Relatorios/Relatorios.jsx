import React, { useEffect, useState } from 'react';
import { Avatar, Divider, Typography } from '@mui/material';
import { GoLaw } from 'react-icons/go';
import SuitContainer from './RelatoriosComponents/bySuit/SuitContainer';
import SuitSelect from './RelatoriosComponents/bySuit/SuitSelect';
import SuitsReport from './RelatoriosComponents/bySuit/SuitsReport';
import { getAllSuits } from '../../../services/api';
import './Relatorios.css';
import '../Processos/Processos.css';

const Relatorios = () => {
  const [suits, setSuits] = useState([]);
  const [targetSuit, setTargetSuit] = useState('');

  useEffect(async () => {
    const suitsReponse = await getAllSuits();
    setSuits(suitsReponse);
  }, []);

  useEffect(() => {
    if (suits.length > 0) {
      return setTargetSuit(suits[0]._id);
    }
    return null;
  }, [suits]);

  return (
    <div className="report-page-container">
      <h1 className="relatorios-title">
        Relatórios
      </h1>
      <div className="suits-report-container">
        <Divider variant="middle" textAlign="left" className="suits-report-divider">
          Por Processos
        </Divider>
        <SuitContainer>
          <div className="suit-report-nav-items">
            <Avatar className="report-avatar-icon">
              <GoLaw />
            </Avatar>
            &nbsp;
            Número do Processo:
            &nbsp;
            <SuitSelect
              suits={suits}
              setSuits={setSuits}
              setTargetSuit={setTargetSuit}
            />
          </div>
        </SuitContainer>
        <SuitsReport
          targetSuit={targetSuit}
          suits={suits}
        />
        <div className="reports-references">
          <Typography color="textSecondary" className="references-typography">
            <sup>1</sup>
            &nbsp;
            Da data de distribuição até o último andamento.
            <br />
            <sup>2</sup>
            &nbsp;
            Média baseada nas ações com mesmo pedido.
            <br />
            <sup>3</sup>
            &nbsp;
            Com base em ações de mesmo pedido.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Relatorios;
