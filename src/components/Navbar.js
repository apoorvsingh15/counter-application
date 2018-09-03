import React, {Component, Fragment} from 'react'
import CounterComponent from './CounterComponent'
export default class Navbar extends Component{
    render(){
        return(
            <Fragment>
                <div style={{ height : '30px',width : '100%', background : 'cyan', color : 'white'}}>
                    <div style={{ display : 'flex'}}>
                        <div>Navbar</div>
                        <div style={{ marginLeft : '10px'}}>{this.props.updateNav()}</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
