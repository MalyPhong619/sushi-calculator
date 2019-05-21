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
          hoursOpen: '11 pm',
          hoursClosed: '9:30 am',
          red: 1.20,
          blue: 2.10,
          yellow: 2.60,
          orange: 3.10
        },
        {
          name: 'Sushi Ohana',
          location: '1422 Northeast Broadway',
          hoursOpen: '11 pm',
          hoursClosed: '9:30 am',
          red: 1.20,
          blue: 2.10,
          yellow: 2.60,
          green: 3.10
        },
        {
          name: 'Sushi Chiyo',
          location: '4029 NE Sandy Blvd',
          hoursOpen: '11 pm',
          hoursClosed: '9:30 am',
          red: 1.20,
          blue: 2.10,
          yellow: 2.60,
          purple: 3.10
        },
        {
          name: 'Sushi Sapporo',
          location: '9738 SE Washington St ste m',
          hoursOpen: '11 pm',
          hoursClosed: '9:30 am',
          red: 1.20,
          blue: 2.10,
          yellow: 2.60,
          green: 3.10
        }
      ]
    };
    this.handleSelectingRestaurant = this.handleSelectingRestaurant.bind(this);
  }

  handleSelectingRestaurant(props) {
    this.setState = {
      name: props.name,
      location: props.location,
      hoursOpen: props.hoursOpen,
      hoursClosed: props.hoursClosed,
      colorPlates: {
        red: props.red,
        blue: props.blue,
        yellow: props.yellow,
        green: props.green,
        orange: props.orange,
        purple: props.purple
      }
    }
  }


  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/'
            render={()=><Display restaurantList={this.state.masterRestaurantList} onHandleSelectingRestaurant={this.handleSelectingRestaurant} />} />
          <Route exact path='/calculator'
            render={()=><CalcDisplay
            restaurant={this.setState} />} />
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
