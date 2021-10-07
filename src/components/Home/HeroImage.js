import React from "react";
import 'bulma/css/bulma.css';
import './HeroImage.css'
import Img from './Juiz.jpg';

const HeroImage = () => {
        
    return(
      <div className='background'>
        <img alt='Juiz' src={ Img } />
        <div className='blue-container'>
          <div className='presentation'>
            <h1>
              JURIMETRIA
            </h1> 
            <p>
              Obtenha relatórios estatísticos de seus processos cadastrados! <br/>
              <br/>
              Compreenda melhor decisões, mudanças e convenções que acontecem dentro do mundo jurídico e 
              saiba quais podem ser os caminhos que um juiz adotaria em uma sentença 
              ou quais desdobramentos um litígio poderia tomar.
            </p>
          </div>
        </div>
      </div>   
    )
  }

export default HeroImage;
  