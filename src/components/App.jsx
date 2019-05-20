import React from 'react';
import './App.scss';
import Error404 from './Error404';
import Header from './Header';
import Display from './Display';
import CalcDisplay from './CalcDisplay';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterRestaurantList: [
        {
          name: 'Sushi Sakura',
          location: '506 SW 6th Ave',
          hoursOpen: '11',
          hoursClosed: '9:30',
          red: 1.2,
          blue: 2.1,
          yellow: 2.6,
          orange: 3.1
        },
        {
          name: 'Sushi Ohana',
          location: '1422 Northeast Broadway',
          hoursOpen: '11',
          hoursClosed: '9:30',
          red: 1.2,
          blue: 2.1,
          yellow: 2.6,
          green: 3.1
        },
        {
          name: 'Sushi Chiyo',
          location: '4029 NE Sandy Blvd',
          hoursOpen: '11',
          hoursClosed: '9:30',
          red: 1.2,
          blue: 2.1,
          yellow: 2.6,
          purple: 3.1
        },
        {
          name: 'Sushi Sapporo',
          location: '9738 SE Washington St ste m',
          hoursOpen: '11',
          hoursClosed: '9:30',
          red: 1.2,
          blue: 2.1,
          yellow: 2.6,
          green: 3.1
        }
      ]
    };
  }


  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/'  render={()=><Display restaurantList={this.state.masterRestaurantList} />} />
          <Route exact path='/calculator' render={()=><CalcDisplay restaurantList={this.state.masterRestaurantList} />} />
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
