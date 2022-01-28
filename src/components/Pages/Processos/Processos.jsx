import React, { useState } from 'react';
import CadastrarProcesso from './ProcessosComponents/CadastrarProcesso/CadastrarProcesso';
import Lista from './ProcessosComponents/Lista/Lista';
import './Processos.css';

const Processos = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 className="processos-title">
        Processos
      </h1>
      <CadastrarProcesso setLoading={setLoading} />
      <Lista loading={loading} setLoading={setLoading} />
    </div>
  );
};

export default Processos;
