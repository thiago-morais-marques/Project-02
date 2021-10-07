import './App.css';
import 'bulma/css/bulma.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Processos from '../Processos/Processos';
import Relatorios from '../Relatorios/Relatorios';

function App() {
  return (
    <div className="App">
  
      <BrowserRouter>

        <Navbar />

        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/processos'>
          <Processos />
        </Route>

        <Route exact path='/relatorios'>
          <Relatorios />
        </Route>

      </BrowserRouter>

    </div>
  );
}

export default App;
