import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardContent, Grid, Typography, CircularProgress,
} from '@mui/material';

const RequestCard = ({
  request, wonSuits, title, suits,
}) => {
  const requests = (target) => {
    return target.pedido === request;
  };

  const filteredByRequest = suits.filter(requests);

  const filteredWonSuits = suits.filter(wonSuits);

  const risk = () => {
    const proportion = (filteredWonSuits.length * 100) / filteredByRequest.length;
    if (Number.isNaN(proportion)) {
      return NaN;
    }
    return proportion.toFixed(0);
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

RequestCard.propTypes = {
  suits: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  wonSuits: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  request: PropTypes.string.isRequired,
};

export default RequestCard;
