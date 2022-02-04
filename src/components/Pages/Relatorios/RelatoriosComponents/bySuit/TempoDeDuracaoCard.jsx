import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, Grid, Typography, CircularProgress,
} from '@mui/material';

const TempoDeDuracao = ({ report }) => {
  const date1 = new Date(report.dataDistribuicao);
  const date2 = new Date(report.dataUltimoAndamento);
  const diff = new Date(date2.getTime() - date1.getTime());

  const yearsDiff = diff.getUTCFullYear() - 1970;
  const monthDiff = diff.getUTCMonth();
  const daysDiff = diff.getUTCDate() - 1;

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
              TEMPO DE DURAÇÃO DO PROCESSO&nbsp;
              <sup>1</sup>
            </Typography>
            <Typography
              color="textPrimary"
              className="card-text-content"
              variant="h4"
            >
              {Number.isNaN(yearsDiff)
                ? (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                  </div>
                )
                : `${yearsDiff} ano(s), ${monthDiff} mes(es) e ${daysDiff} dia(s)`}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TempoDeDuracao.propTypes = {
  report: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default TempoDeDuracao;
