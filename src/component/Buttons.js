import React, {Component} from "react";

class Buttons extends Component{
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
    

    render(){
        return (
            <div className={`column-${this.props.cols}`}>
                <button className="calc-button" onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            </div>
        )
    }
}

export default Buttons;