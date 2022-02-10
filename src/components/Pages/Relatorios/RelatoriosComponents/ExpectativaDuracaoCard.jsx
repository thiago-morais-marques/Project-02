import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, Grid, Typography, CircularProgress,
} from '@mui/material';

const ExpectativaDuracao = ({ suits, report }) => {
  const targetReport = (target) => {
    return target.pedido === report.pedido;
  };

  const filteredSuits = suits.filter(targetReport);

  const dateDiff = filteredSuits.map((suit) => {
    const date1 = new Date(suit.dataDistribuicao);
    const date2 = new Date(suit.dataUltimoAndamento);
    const diff = new Date(date2.getTime() - date1.getTime());
    const yearsDiff = diff.getUTCFullYear() - 1970;
    return yearsDiff;
  });

  const averageOfYears = () => {
    if (dateDiff.length > 0) {
      const i = dateDiff.length;
      const reducedDiff = dateDiff.reduce((acc, cur) => acc + cur) / i;
      return reducedDiff.toFixed(0);
    }
    return 0;
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
              EXPECTATIVA DE DURAÇÃO&nbsp;
              <sup>2</sup>
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
              className="card-text-content"
            >
              {dateDiff.length === 0
                ? (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                  </div>
                )
                : `${averageOfYears()} anos`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ExpectativaDuracao.propTypes = {
  report: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  suits: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default ExpectativaDuracao;
