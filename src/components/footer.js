import React, { Component } from 'react';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      year:2018
    };
  }
  componentDidMount(){
    const now=new Date();
    const year =now.getFullYear();
    this.setState({year});
  }
  
  render() {
    return (
      <div>
          <footer className="footer">
            <div>This weather project is Powered by <a href="https://darksky.net/poweredby/" target="_blank">Dark Sky</a></div>
            <div>Project By <a href="http://hamzaenaime.github.io/heanime" target="_blank">Enaime Hamza</a></div>
            <div>Copyright © {this.state.year}</div>
          </footer>
      </div>
    );
    }
}

export default Footer;
  