import logo from './logo.svg';
import './App.css';
import Designer from './components/Designer';
import Inicio from './components/inicio';
import Model from './components/Model';
import Emple from './components/Emple';
import Even from './components/Even';
import Arti from './components/Arti'
import Des from './components/Des'
import Nosotros  from './components/nosotros';
import Agen from './components/Agen'
import Barra from './components/barra'
import Pabe from './components/Pabe'
import Layout from './components/layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'


function App() {
  return (
    
    <>
     <div className="App">
     <ToastContainer />
     <header><Barra/></header>
     <div class="circle"></div> 
     </div>
    
     <body>
    
    <Router>
    
      <div>
        <Switch>
          <Route exact path="/">
            <Inicio/>
          </Route>
          <Route path="/Eventos">
         
            <Even />
            
          </Route>
          <Route path="/nosotros">
         
            <Nosotros />
            
          </Route>
          <Route path="/menu">
            <Layout />
          </Route>
          <Route path="/Disn">
            <Designer />
          </Route>
          <Route path="/Model">
            <Model />
          </Route>
          <Route path="/Emple">
            <Emple />
          </Route>
          <Route path="/Arti">
            <Arti />
          </Route>
          <Route path="/Des">
            <Des />
          </Route>
          <Route path="/Agen">
            <Agen />
          </Route>
          <Route path="/Pabe">
            <Pabe />
          </Route>

          </Switch>
        
      </div>
      </Router>
      </body>
    
    </>
  );
}

export default App;
