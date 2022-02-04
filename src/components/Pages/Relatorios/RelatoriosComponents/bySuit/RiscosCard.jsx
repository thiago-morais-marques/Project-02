import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, Grid, Typography, CircularProgress,
} from '@mui/material';

const Riscos = ({
  suits, report, wonSuits, title,
}) => {
  const suitsByRequests = (target) => {
    return target.pedido === report.pedido;
  };

  const filteredByRequest = suits.filter(suitsByRequests);

  // const filterPrimeiraInstancia = (target) => {
  //   return target.pedido === report.pedido && target.procedenciaPrimeiraInstancia === true;
  // };

  const filteredWonSuits = suits.filter(wonSuits);

  const risk = () => {
    const proportion = (filteredWonSuits.length * 100) / filteredByRequest.length;
    const result = 100 - proportion;
    if (Number.isNaN(result)) {
      return NaN;
    }
    return result.toFixed(0);
  };

  return (
    <Card
      sx={{ height: '100%' }}
      elevation={2}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
              className="card-text-title"
            >
              {title}
              &nbsp;
              <sup>3</sup>
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
              className="card-text-content"
            >
              {Number.isNaN(risk())
                ? (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                  </div>
                )
                : `${risk()}%`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Riscos.propTypes = {
  report: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  suits: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  wonSuits: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Riscos;
