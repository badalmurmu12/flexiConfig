import React, { Component } from 'react';
import './App.css';
import flexiConfig from './data';
import Flexi from './Flexi/Flexi'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      flexiConfig: flexiConfig,
      receivedata: {}
    }
    this.onFlexiSubmit = this.onFlexiSubmit.bind(this)
  }
  onFlexiSubmit(event, val){
      event.preventDefault()
      this.setState({receivedata: val })
  }

  render() {
    return (
      <div className="App">
        <Flexi onSubmit={this.onFlexiSubmit} config={this.state.flexiConfig} />

        <div className='displaydata'>
          <h2> Display </h2>
          {this.state.receivedata ? Object.keys(this.state.receivedata).map((data, index) => <div key={index} className='rdata'>
            <div>{data} </div> <div>{this.state.receivedata[data]} </div>
            </div>) : ''}
        </div>
      </div>
    );
  }
}

export default App;
