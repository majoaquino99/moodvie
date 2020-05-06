import React from 'react';
import Landing from './views/LandingView';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' component= {Landing} />      
        </Switch>
      </Router>
    </div>
  );
}

export default App;
