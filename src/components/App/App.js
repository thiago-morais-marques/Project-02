import './App.css';
import 'bulma/css/bulma.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Processos from '../Processos/Processos';
import Relatorios from '../Relatorios/Relatorios';
import ApagarProcesso from '../Processos/ApagarProcesso'
//import CadastrarProcesso from '../Processos/CadastrarProcesso';

function App() {

  return (
    
    <div className="App">
  
      <BrowserRouter>

        <Navbar />

      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/processos' component={Processos} />
          <Route exact path='/relatorios'component={Relatorios}/>
          <Route exact path='/processos/delete/:id' component={ApagarProcesso} />
        </Switch>

        {/*<Route exact path='/cadastrar'>
          <CadastrarProcesso />
        </Route>*/}
      </div>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
