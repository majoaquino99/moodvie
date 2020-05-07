import React from 'react';
import {
	Route, Redirect, Switch,
	BrowserRouter as Router,
} from 'react-router-dom';
import { Result, LandingView } from './views';



function App() {
<<<<<<< HEAD
  
=======

>>>>>>> 226a369a50709cf32a218e29bc5694efd2df9bc7
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




