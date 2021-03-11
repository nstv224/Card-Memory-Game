import React from "react";
class Timer extends React.Component {
    constructor (props) {
      super(props)
      this.state = {count: 0}
      this.startTimer();
    }
    tick () {
      this.setState({count: (this.state.count + 1)})
      if(this.props.counter == 8){
          clearInterval(this.timer)
      }
    }
    startTimer () {
      this.timer = setInterval(this.tick.bind(this), 1000)
    }
    
    render () {
      return (
        <div class="d-flex justify-content-center" style={{margin:15}}>          
          {this.props.counter == 8 ? <h4>You won the game in {this.state.count}sec!!!! </h4>: <h4>Timer : {this.state.count}sec</h4> }
        </div>
      )
    }
  }

export default Timer;