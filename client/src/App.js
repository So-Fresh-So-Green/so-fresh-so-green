//React packages
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//TODO: Tailwind packages

//Pages
import homePage from './Pages/Homepage';
import login from './Pages/Login';
import NavigationBar from './components/NavigationBar';

//Component


function App() {
  return (
    <div className="App">
      <Router>
      <NavigationBar />
      <Switch>
        <Route path='/' exact component={homePage}/>
        <Route path='/so-fresh-so-green' exact component={homePage}/>
        <Route path='/so-fresh-so-green/home' exact component={homePage}/>
        <Route path='/so-fresh-so-green/login' exact component={login}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
