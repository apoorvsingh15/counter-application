import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CounterComponent from './components/CounterComponent'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counterItems : []
    }
  }

  addItems = () => {
    const { counterItems } = this.state;
    counterItems.push(Math.random());
    this.setState({
      counterItems
    })
  }

  deleteItems = () => {
    const { counterItems } = this.state;
    counterItems.pop();
    this.setState({
      counterItems
    })
  }

  addNavCount = () => {
    return this.state.counterItems.length;
    
   
  }
 
  render() {
    const {counterItems} = this.state;
    return (
      <Fragment>
        <Navbar updateNav={this.addNavCount} />
        <button onClick={this.addItems}>Add</button>
        {counterItems.map((data,key) => {
          return(
            <div key={key}>
              <CounterComponent
                updateParentDelete={this.deleteItems}
              />
            </div>
          )})
        }
      </Fragment>
    );
  }
}

export default App;
