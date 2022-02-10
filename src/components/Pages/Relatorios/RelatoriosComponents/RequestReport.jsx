import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import RequestCard from './RequestCard';

const RequestReport = ({ request, suits }) => {
  const filterPrimeiraInstancia = (target) => {
    return target.pedido === request && target.procedenciaPrimeiraInstancia === true;
  };

  const filterSegundaInstancia = (target) => {
    return target.pedido === request && target.procedenciaSegundaInstancia === true;
  };

  const filterSTJ = (target) => {
    return target.pedido === request && target.procedenciaStj === true;
  };

  const filterSTF = (target) => {
    return target.pedido === request && target.procedenciaStf === true;
  };

  return (
    <div className="suit-report-first-row">
      <Grid
        container
        justifyContent="space-between"
        rowSpacing={{ xs: 1, sm: 2 }}
        columnSpacing={{ xs: 1, sm: 3 }}
      >
        <Grid item xs={12} sm={3}>
          <RequestCard
            request={request}
            suits={suits}
            wonSuits={filterPrimeiraInstancia}
            title="EXPECTATIVA DE ÊXITO em 1ª INSTÂNCIA"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RequestCard
            request={request}
            suits={suits}
            wonSuits={filterSegundaInstancia}
            title="EXPECTATIVA DE ÊXITO EM 2ª INSTÂNCIA"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RequestCard
            request={request}
            suits={suits}
            wonSuits={filterSTJ}
            title="EXPECTATIVA DE ÊXITO NO STJ"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <RequestCard
            request={request}
            suits={suits}
            wonSuits={filterSTF}
            title="EXPECTATIVA DE ÊXITO NO STF"
          />
        </Grid>
      </Grid>
    </div>
  );
};

RequestReport.propTypes = {
  request: PropTypes.string.isRequired,
  suits: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default RequestReport;
