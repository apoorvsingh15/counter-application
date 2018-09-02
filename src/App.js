import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import CounterComponent from './components/CounterComponent'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counterItems : [],
      count : 0
    }
  }

  addItems = () => {
    const { counterItems } = this.state;
    counterItems.push(0);
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
  onClickPlus = () => {
    const { count } = this.state;
    this.setState({
        count : count+1
    })
}

onClickMinus = () => {
    const { count } = this.state;
    if(count > 0){
    this.setState({
        count : count-1
    })}
    
    else{
        this.setState({
            count : 0
        })
    }
}
displayCount = () => {
    const { count } = this.state;
    if( count === 0 ){
        return <div style={{ backgroundColor : 'red'}}>Zero</div>
    }else{
        return <div>{count}</div>
    }
}
  render() {
    const {counterItems} = this.state;
    return (
      <Fragment>
        <Navbar />
        <button onClick={this.addItems}>Add</button>
        {counterItems.map((data,key) => {
          return(
            <div key={key}>
              <CounterComponent 
                updateParentDelete={this.deleteItems}
                updateParentPlus={this.onClickPlus}
                updateParentMinus={this.onClickMinus}
                updateParentDisplay={this.displayCount} 

              />
            </div>
          )})
        }
      </Fragment>
    );
  }
}

export default App;
