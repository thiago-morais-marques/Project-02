import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap';
import { GoLaw } from 'react-icons/go';
import { IconContext } from 'react-icons';
import { CircularProgress } from '@mui/material';
import ProcessosDetalhes from '../ProcessosDetalhes/ProcessosDetalhes';
import { getAllSuits } from '../../../../../services/api';
import './Lista.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Lista = ({ loading, setLoading }) => {
  const [suits, setSuits] = useState([]);

  const memoizedValues = useMemo(() => ({ color: '#063970', size: '1.3em' }), []);

  useEffect(async () => {
    const suitsReponse = await getAllSuits();
    setSuits(suitsReponse);
    setLoading(false);
  }, [loading]);

  return loading
    ? (
      <div className="loading-screen">
        <CircularProgress size="4rem" />
      </div>
    )
    : (
      <Accordion className="accordion" defaultActiveKey="0">
        {suits.map((processo) => {
          return (
            <Accordion.Item eventKey={processo._id} key={processo._id}>
              <Accordion.Header className="accordion-header">
                <div className="suit-info">
                  <IconContext.Provider value={memoizedValues}>
                    <GoLaw />
                    &nbsp;
                    <div className="suit-data">
                      <span className="proc-number">
                        {'Proc. n. '}
                      </span>
                      {processo.processo}
                      {' - '}
                      {processo.poloAtivo}
                      {' x '}
                      {processo.poloPassivo}
                    </div>
                  </IconContext.Provider>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <br />
                <ProcessosDetalhes detalhes={processo} setLoading={setLoading} />
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    );
};

Lista.propTypes = {
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Lista;
