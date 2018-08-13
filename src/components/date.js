import React, { Component } from 'react';
import './weather.css';

class CurrentDate extends Component {
  constructor() {
    super();
    this.state = {
      day:0,
      dayS:'',
      hour:0,
      minute:0
    };
  }
  getD=()=>{
    const now = new Date();
    this.setState(
        {
          day:now.getDay(),
          hour:now.getHours(),
          minute:now.getMinutes()
        }
      );
    this.convertDay(now.getDay());
  }
  convertDay=(day)=>{
    switch(day) {
    case 0:this.setState({dayS:"Sunday"});break;
    case 1:this.setState({dayS:"Monday"});break;
    case 2:this.setState({dayS:"Tuesday"});break;
    case 3:this.setState({dayS:"Wednesday"});break;
    case 4:this.setState({dayS:"Thursday"});break;
    case 5:this.setState({dayS:"Friday"});break;
    case 6:this.setState({dayS:"Saturday"});break;
  }
}

  componentDidMount(){
    this.getD();
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
        <i className="fas fa-calendar-alt"></i>{' '}
          {this.state.dayS},{this.state.hour}:{this.state.minute} 
        </div>
      </div>
    );
  }
}

export default CurrentDate;
  