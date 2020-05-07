import React from 'react';
import {
	Route, Redirect, Switch,
	BrowserRouter as Router,
} from 'react-router-dom';
import { Result, LandingView } from './views';



function App() {
  return (
      <Router>
        <Switch>
			<Route exact path="/" component={LandingView} />
			<Route exact path="/result" component={Result} />
			<Redirect to="/" />
        </Switch>
      </Router>
  );
}


export default App;




