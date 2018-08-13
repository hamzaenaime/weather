import React, { Component } from 'react';
import './weather.css';

class Location extends Component {
  constructor() {
    super();
    this.state = {
      location:{}
    };
  }
  fetchData=()=>{
    navigator.geolocation.getCurrentPosition((position)=> {
      fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&sensor=true')
      .then(res=>res.json())
      .then(location => this.setState({location}));
    });
  }
  componentDidMount(){
    this.fetchData();
  }
  render() {
    if(this.state.location.results){
    return (
      <div className="location">
        <i className="fas fa-map-marker-alt"></i>{' '}
          {this.state.location.results[1].formatted_address}
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

export default Location;
  