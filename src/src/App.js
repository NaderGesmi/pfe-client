import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages';
import SinginPage from './pages/singin';
import DemandeForm from './demandeForm';
 


function App() {
  return (
    
    
    <Router >
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/singin" component={SinginPage} exact />
        <Route path="/demande" component={DemandeForm} exact />
        
    

        
      </Switch>

      </Router>


  );
};

export default App;
