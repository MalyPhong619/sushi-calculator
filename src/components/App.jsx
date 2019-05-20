import React from 'react';
import './App.scss';
import Error404 from './Error404';
import Header from './Header';
import Display from './Display';
import CalcDisplay from './CalcDisplay';
import { Switch, Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Display} />
        <Route exact path='/calculator' component={CalcDisplay} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
