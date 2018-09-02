import React, {Component, Fragment} from 'react'
import CounterComponent from './CounterComponent'
export default class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        console.log(this.props, "nav")
        return(
            <Fragment>
                <div style={{ height : '30px',width : '100%', background : 'cyan', color : 'white'}}>
                    <div style={{ display : 'flex'}}>
                        <div>Navbar</div>
                        <div style={{ marginLeft : '10px'}}>4</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
