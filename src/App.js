import React, {Component} from "react";
import Buttons from './component/Buttons'
import './css/style.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current:'0',
      previous: [],
      nextIsReset:false
    };
  }

  reset = (e) => {
      this.setState({current:'0', previous:[], nextIsReset:false})
  }

  addToCurrent = (symbol) => {
    if(['/', '-', '+', '*'].indexOf(symbol) > -1){
      let {previous, nextIsReset} = this.state;
      previous.push(this.state.current + symbol);
      this.setState({previous, nextIsReset:true});
      console.log(previous,nextIsReset)
    }else{
      if(this.state.current === "0" && symbol !== '.' || this.state.nextIsReset){
        this.setState({current:symbol, nextIsReset:false})
      }else{
         this.setState({ current: this.state.current + symbol });
      }
    }
  }
  
  calculate = (symbol) => {
    let {previous, current, nextIsReset} = this.state;
    if(previous.length > 0){
       current = eval(String(previous[previous.length - 1] + current));
       this.setState({ current, nextIsReset: true, previous });
    }
   
  }
  

  render() {
    let { current } = this.state;
    let buttons = [
     { symbol: "C", cols: 3, action: this.reset },
      { symbol: "/", cols: 1, action: this.addToCurrent },
     { symbol: "7", cols: 1, action: this.addToCurrent },
      { symbol: "8", cols: 1, action: this.addToCurrent },
     { symbol: "9", cols: 1, action: this.addToCurrent },
      { symbol: "*", cols: 1, action: this.addToCurrent },
     { symbol: "4", cols: 1, action: this.addToCurrent },
      { symbol: "5", cols: 1, action: this.addToCurrent },
     { symbol: "6", cols: 1, action: this.addToCurrent },
      { symbol: "-", cols: 1, action: this.addToCurrent },
     { symbol: "1", cols: 1, action: this.addToCurrent },
      { symbol: "2", cols: 1, action: this.addToCurrent },
     { symbol: "3", cols: 1, action: this.addToCurrent },
      { symbol: "+", cols: 1, action: this.addToCurrent },
     { symbol: "0", cols: 2, action: this.addToCurrent },
      { symbol: ".", cols: 1, action: this.addToCurrent },
     { symbol: "=", cols: 1, action: this.calculate },      
    ];
    return (
      <div className="App">
        {this.state.previous.length > 0 ? (
          <div className="float-last">
            {this.state.previous[this.state.previous.length - 1]}
          </div>
        ) : null}
        <input className="result" type="text" value={current} />
        <div>
          {buttons.map((btn, i) => {
            return (
              <Buttons
                key={i}
                symbol={btn.symbol}
                cols={btn.cols}
                action={(symbol) => btn.action(symbol)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;