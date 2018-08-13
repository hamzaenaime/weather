import React, { Component } from 'react';
import './weather.css';

class Daily extends Component {
  constructor() {
    super();
    this.state = {
      daily:{}
    };
  }
  fetchData=()=>{
    navigator.geolocation.getCurrentPosition((position)=> {
      fetch('https://shrouded-tundra-91337.herokuapp.com/https://api.darksky.net/forecast/019cfc49268811058b02522c8cb5a965/'+position.coords.latitude+','+position.coords.longitude+'?units=ca')
      .then(res=>res.json())
      .then(weather => this.setState({daily:weather.daily}));
    });
  }

  DayToString=(day)=>{
    switch(day) {
    case 0 :return "Sunday";
    case 1 :return "Monday";
    case 2 :return "Tuesday";
    case 3 :return "Wednesday";
    case 4 :return "Thursday";
    case 5 :return "Friday";
    case 6 :return "Saturday";
    default :return "error";
  }
}

  returnDayString=(ts)=>{
    const a = new Date(ts*1000);
    const date = a.getDay();
    return this.DayToString(date);
  }
  componentDidMount(){
    this.fetchData();
  }
  render() {
    if(this.state.daily.data  && this.state.daily.data[0].time){
    return (
      <div>
        <div className='daily-summary'>
          <div id='daily-summary'>
            {this.state.daily.summary}
          </div>
        </div>
        <div className="box">
          {this.state.daily.data.map(day=>
            <div className='day'>
              <div className='d'>
                {this.returnDayString(day.time)}
              </div>
              <div>
                <i class="fas fa-sun"></i>{' '}{day.apparentTemperatureHigh}°C 
              </div>
              <div>
                <i class="fas fa-moon"></i>{' '}{day.apparentTemperatureLow}°C
              </div>
            </div>
          )}
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

export default Daily;
  