import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CounterComponent from './components/CounterComponent'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counterItems : [1,2,3,4]
    }
  }
  render() {
    const {counterItems} = this.state;
    return (
      <Fragment>
        <Navbar />
        {counterItems.map((data,key) => {
          return(
          <div key={key}>
            <CounterComponent />
          </div>
        )})}
      </Fragment>
    );
  }
}

export default App;
