import React from 'react';
import Landing from './views/LandingView';
import Result from './views/Result';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' component= {Landing} />
          <Route exact path = '/result' component= {Result} />          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
