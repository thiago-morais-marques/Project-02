import React from 'react';
import Img from '../../../assets/images/Juiz.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="hero-image">
      <img alt="juiz" src={Img} />
      <div className="blue-container">
        <div className="presentation">
          <h1>
            JURIMETRIA
          </h1>
          <p>
            Obtenha relatórios estatísticos de seus processos cadastrados!
            <br />
            <br />
            Compreenda melhor decisões, mudanças e convenções que acontecem dentro do mundo
            jurídico e saiba quais podem ser os caminhos que um juiz adotaria em uma sentença
            ou quais desdobramentos um litígio poderia tomar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
