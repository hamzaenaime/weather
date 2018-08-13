import React, { Component } from 'react';
import './weather.css';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      currently:{},
      icon:""
    };
  }
  fetchData=()=>{
    navigator.geolocation.getCurrentPosition((position)=> {
      fetch('https://shrouded-tundra-91337.herokuapp.com/https://api.darksky.net/forecast/019cfc49268811058b02522c8cb5a965/'+position.coords.latitude+','+position.coords.longitude+'?units=ca')
      .then(res=>res.json())
      .then(weather => this.setState({currently:weather.currently}));
    });
  }

  setIcon = ()=>{
    switch(this.state.currently.icon){
      case 'clear-day':this.setState({icon:"wi wi-day-sunny"});break;
      case 'clear-night':this.setState({icon:"wi wi-night-clear"});break;
      case 'clouds':this.setState({icon:"wi wi-cloudy"});break;
      case 'snow':this.setState({icon:"wi wi-snow"});break;
      case 'rain':this.setState({icon:"wi wi-rain"});break;
      case 'drizzle':this.setState({icon:"wi wi-sprinkle"});break;
      case 'thunderstorm':this.setState({icon:"wi wi-thunderstorm"});break;
      default : this.setState({icon:"wi wi-day-sunny wi-size-90"});break;
    }
  }
  componentDidMount(){
    this.fetchData();
    this.setIcon();
  }
  render() {
    if(this.state.currently.summary && this.state.icon){
    return (
      <div>
          <div className="summary">
            <i className={this.state.icon} ></i>{' '}
            {this.state.currently.summary}
          </div>
          <div className="wrapper">
            <div id="temperature">
            <i className="fas fa-thermometer-empty"></i>{' '}
              {this.state.currently.temperature}<span className="degree">&#8451;</span>
            </div>  
            <div id="info">
              <div className="">
                humidity : {this.state.currently.humidity*100}%
              </div>
              <div className="">
                wind Speed : {this.state.currently.windSpeed}Km/h
              </div>
              <div className="">
                pressure : {this.state.currently.pressure}
              </div>
              <div className="">
                visibility : {this.state.currently.visibility}
              </div>
            </div>  
          </div>
      </div>
    );
    }else{
      return (
      <div className="col-md-12 load-cont">
          <div className="loader">
          </div>
      </div>);
    }
  }
}

export default Weather;
  