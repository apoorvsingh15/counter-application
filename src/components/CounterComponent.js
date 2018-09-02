import React, {Component,Fragment} from 'react'

export default class CounterComponent extends Component{
    render(){
        return(
            <Fragment>
                <div style={{ display : 'flex', justifyContent : 'space-around'}}>
                    {this.props.updateParentDisplay()}
                    <div>
                        <button style={{ width : '400px'}} onClick={this.props.updateParentPlus}>+</button>
                    </div>
                    <div>
                        <button style={{ width : '400px'}} onClick={this.props.updateParentMinus}>-</button>
                    </div>
                    <div>
                        <button onClick={this.props.updateParentDelete} style={{ width : '200px'}}>Delete</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}