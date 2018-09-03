import React, {Component,Fragment} from 'react'

export default class CounterComponent extends Component{
    constructor(props){
    super(props);
    this.state={
        count : 0   
    }
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
    render(){
        return(
            <Fragment>
                <div style={{ display : 'flex', justifyContent : 'space-around'}}>
                    {this.displayCount()}
                    <div>
                        <button style={{ width : '400px'}} onClick={this.onClickPlus}>+</button>
                    </div>
                    <div>
                        <button style={{ width : '400px'}} onClick={this.onClickMinus}>-</button>
                    </div>
                    <div>
                        <button onClick={this.props.updateParentDelete} style={{ width : '200px'}}>Delete</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}