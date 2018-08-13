import React, { Component } from 'react';
import './App.css';
import Weather from './components/weather';
import Location from './components/location';
import CurrentDate from './components/date';
import Daily from './components/daily';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="main">
          <div className="weather">
            <div id="d1">
              <Location />
              <CurrentDate />
              <Weather />
            </div>
          </div>
        </section>
        <section className="daily">
          <Daily />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
