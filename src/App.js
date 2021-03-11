import './App.css';
import React ,{setState} from "react";
import Board from "./components/Board";
import {Button} from "react-bootstrap";
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showModal : false}
    this.handleClick = this.handleClick.bind(this);
  }
   
  handleClick() {  
    this.setState({
      showModal: true,
    });
  }
    render(){
      return (
        <div class="d-flex justify-content-center"> 
            {!this.state.showModal ? <Button variant="primary" onClick={this.handleClick} style={{height : 60, width : 100, margin : "auto",}}>Start</Button>  : <Board />} 
          </div>
      )
    }
}
export default App;