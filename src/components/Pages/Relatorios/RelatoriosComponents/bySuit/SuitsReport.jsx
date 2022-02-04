import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { getOneSuit } from '../../../../../services/api';
import TempoDeDuracao from './TempoDeDuracaoCard';
import ExpectativaDuracao from './ExpectativaDuracaoCard';
import RiscosCard from './RiscosCard';

const SuitsReport = ({ targetSuit, suits }) => {
  const [report, setReports] = useState({});

  const getSuit = async () => {
    const response = await getOneSuit(targetSuit);
    setReports(response);
  };

  useEffect(async () => {
    await getSuit();
  }, [targetSuit]);

  const filterPrimeiraInstancia = (target) => {
    return target.pedido === report.pedido && target.procedenciaPrimeiraInstancia === true;
  };

  const filterSegundaInstancia = (target) => {
    return target.pedido === report.pedido && target.procedenciaSegundaInstancia === true;
  };

  const filterSTJ = (target) => {
    return target.pedido === report.pedido && target.procedenciaStj === true;
  };

  const filterSTF = (target) => {
    return target.pedido === report.pedido && target.procedenciaStf === true;
  };

  return (
    <div className="suit-report-first-row">
      <Grid
        container
        justifyContent="space-between"
        rowSpacing={{ xs: 1, sm: 2 }}
        columnSpacing={{ xs: 1, sm: 3 }}
      >
        <Grid item xs={12} sm={8}>
          <TempoDeDuracao report={report} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ExpectativaDuracao suits={suits} report={report} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RiscosCard
            suits={suits}
            report={report}
            wonSuits={filterPrimeiraInstancia}
            title="RISCO EM 1ª INSTÂNCIA"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RiscosCard
            suits={suits}
            report={report}
            wonSuits={filterSegundaInstancia}
            title="RISCO DE RECURSO PARA 2ª INSTÂNCIA"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RiscosCard
            suits={suits}
            report={report}
            wonSuits={filterSTJ}
            title="RISCO DE RECURSO PARA O STJ "
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RiscosCard
            suits={suits}
            report={report}
            wonSuits={filterSTF}
            title="RISCO DE RECURSO PARA O STF"
          />
        </Grid>
      </Grid>
    </div>
  );
};

SuitsReport.propTypes = {
  targetSuit: PropTypes.string.isRequired,
  suits: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default SuitsReport;
