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
          closingTime: '11 pm',
          openingTime: '9:30 am',
          red: '1.15',
          blue: '2.10',
          yellow: '2.60',
          orange: '3.30'
        },
        {
          name: 'Fujiama Sushi Bar',
          location: '10308 SE Washington St',
          closingTime: '9 pm',
          openingTime: '11 am',
          red: '1.15',
          blue: '2.10',
          yellow: '2.60',
          orange: '3.30'
        },
        {
          name: 'Sushi Village',
          location: 'NE 181st Ave',
          closingTime: '10 pm',
          openingTime: '11 am',
          red: '1.15',
          blue: '2.10',
          yellow: '2.60',
          orange: '3.30'
        },
        {
          name: 'Hot Pot \'N Sushi',
          location: '10127 NE Cascades Pkwy',
          closingTime: '9 pm',
          openingTime: '11 am',
          red: '1.15',
          blue: '2.10',
          yellow: '2.60',
          orange: '3.30'
        },
        {
          name: 'Sushi Ohana',
          location: '1422 Northeast Broadway',
          closingTime: '11 pm',
          openingTime: '9:30 am',
          hotpink: '1.20',
          blue: '2.25',
          yellow: '2.60',
          green: '3.20'
        },
        {
          name: 'Sushi Chiyo',
          location: '4029 NE Sandy Blvd',
          closingTime: '11 pm',
          openingTime: '9:30 am',
          red: '1.20',
          pink: '2.20',
          yellow: '2.60',
          purple: '3.35'
        },
        {
          name: 'Sushi Sushi',
          location: '5432 SE 82nd Ave',
          closingTime: '9 pm',
          openingTime: '11 am',
          orange: '1.20',
          pink: '2.20',
          yellow: '2.60',
          purple: '3.35'
        },
        {
          name: '98 Degree Sushi',
          location: '8230 SE Harrison St #310',
          closingTime: '9:30 pm',
          openingTime: '11 am',
          orange: '1.20',
          pink: '2.20',
          yellow: '2.60',
          purple: '3.35'
        },
        {
          name: 'O\'Sushi',
          location: '2850 SE 82nd Ave',
          closingTime: '9 pm',
          openingTime: '11:45 am',
          orange: '1.20',
          pink: '2.20',
          red: '2.60',
          green: '3.35'
        },
        {
          name: 'Sushi Takashi',
          location: '2415 SW 5th Ave',
          closingTime: '9 pm',
          openingTime: '11 am',
          orange: '1.20',
          pink: '2.20',
          yellow: '2.60',
          blue: '3.35'
        },
        {
          name: 'Sensei Sushi',
          location: '710 SW 2nd Ave',
          closingTime: '9 pm',
          openingTime: '11 am',
          orange: '1.20',
          pink: '2.20',
          yellow: '2.60',
          blue: '3.35'
        },
        {
          name: 'Sushi Sapporo',
          location: '9738 SE Washington St ste m',
          closingTime: '11 pm',
          openingTime: '9:30 am',
          red: '1.50',
          orange: '2.15',
          yellow: '2.60',
          green: '3.65'
        }
      ],
      currentPlace: {}
    };
    this.handleSelectingRestaurant = this.handleSelectingRestaurant.bind(this);
    this.newNumber = this.newNumber.bind(this)
  }

  handleSelectingRestaurant(props) {
    this.setState({
      name: props.name,
      location: props.location,
      closingTime: props.closingTime,
      openingTime: props.openingTime,
      restaurantTotal: 0,
      colorPlates: {
        red: props.red,
        blue: props.blue,
        yellow: props.yellow,
        green: props.green,
        orange: props.orange,
        purple: props.purple,
        pink: props.pink,
        hotpink: props.hotpink
      }
    })
  }

  newNumber(num){
    let newnum = this.state.restaurantTotal += num
    this.setState({
      restaurantTotal: newnum
    })
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
              information={this.newNumber}
              restaurant={this.state} />} />
            <Route component={Error404}/>
          </Switch>
        </div>
      );
    }
  }

  export default App;
