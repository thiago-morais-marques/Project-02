import './App.css';
import 'bulma/css/bulma.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Processos from '../Processos/Processos';
import Relatorios from '../Relatorios/Relatorios';
//import CadastrarProcesso from '../Processos/CadastrarProcesso';

function App() {

  const [suits, setSuits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('https://ironrest.herokuapp.com/processos')
    .then((response) => {
      console.log(response.data);
      setSuits([...response.data]);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err)
    })
  }, []);

  return (
    
    <div className="App">
  
      <BrowserRouter>

        <Navbar />

        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/processos'>
          {loading ? <div>Loading...</div> : <Processos processos={suits}/>}

        </Route>

        <Route exact path='/relatorios'>
          <Relatorios />
        </Route>

        {/*<Route exact path='/cadastrar'>
          <CadastrarProcesso />
        </Route>*/}

      </BrowserRouter>

    </div>
  );
}

export default App;
